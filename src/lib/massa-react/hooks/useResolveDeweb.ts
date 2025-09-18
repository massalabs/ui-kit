import { useState, useEffect } from 'react';
import { CHAIN_ID, resolveDeweb } from '@massalabs/massa-web3';

interface UseResolveDewebResult {
  resolvedUrl: string;
  isLoading: boolean;
  error: string | null;
}

interface UseResolveDewebOptions {
  fallbackUrl?: string;
  shouldResolve?: boolean;
  chainId?: bigint;
}

/**
 * Custom hook to resolve DeWeb URLs using the massa-web3 resolveDeweb function
 * @param originalUrl - The original URL to resolve (should contain massa.network domains)
 * @param options - Optional configuration
 * @returns Object containing the resolved URL, loading state, and error state
 */
export function useResolveDeweb(
  originalUrl: string,
  options: UseResolveDewebOptions = {},
): UseResolveDewebResult {
  const {
    fallbackUrl = originalUrl,
    shouldResolve = true,
    chainId = CHAIN_ID.Mainnet,
  } = options;

  const [resolvedUrl, setResolvedUrl] = useState<string>(fallbackUrl);
  const [isLoading, setIsLoading] = useState<boolean>(shouldResolve);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only resolve if shouldResolve is true and URL contains massa.network
    if (!shouldResolve || !originalUrl.includes('massa.network')) {
      setResolvedUrl(originalUrl);
      setIsLoading(false);
      return;
    }

    const resolveUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Extract the path from the original URL to pass to resolveDeweb
        const pathToResolve = extractMNSUrl(originalUrl);

        const resolved = await resolveDeweb(pathToResolve);
        setResolvedUrl(resolved);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to resolve DeWeb URL';
        setError(errorMessage);
        setResolvedUrl(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };

    resolveUrl();
  }, [originalUrl, fallbackUrl, shouldResolve, chainId]);

  return {
    resolvedUrl,
    isLoading,
    error,
  };
}

export function extractMNSUrl(url: string): string {
  const urlObj = new URL(url);
  const mns = urlObj.hostname.split('.')[0] + '.massa';
  return mns + urlObj.pathname + urlObj.search + urlObj.hash;
}
