import { useState, useEffect } from 'react';
import { resolveDeweb } from '@massalabs/massa-web3';

interface UseResolveDewebResult {
  resolvedUrl: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook to resolve DeWeb URLs using the massa-web3 resolveDeweb function
 * @param Url - The original URL to resolve (should contain massa.network domains)
 * @param chainId - The chain ID to resolve the URL on
 * @returns Object containing the resolved URL, loading state, and error state
 */
export function useResolveDeweb(
  Url: string,
  chainId: bigint,
): UseResolveDewebResult {
  const [resolvedUrl, setResolvedUrl] = useState<string>(Url);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Extract the path from the original URL to pass to resolveDeweb
        const pathToResolve = extractMNSUrl(Url);

        const resolved = await resolveDeweb(pathToResolve, chainId);
        setResolvedUrl(resolved);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to resolve DeWeb URL';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    resolveUrl();
  }, [Url, chainId]);

  return {
    resolvedUrl,
    isLoading,
    error,
  };
}

/**
 * Extracts the mns from a deweb url (expl: mns.massa.network to mns.massa)
 * @param url - the url to extract the mns from
 * @returns the mns url
 */
export function extractMNSUrl(url: string): string {
  const urlObj = new URL(url);
  let mns: string;
  if (urlObj.hostname.includes('.')) {
    mns = urlObj.hostname.split('.')[0] + '.massa';
  } else {
    // no subdomain, use the whole hostname an mns
    mns = urlObj.hostname + '.massa';
  }
  return (
    urlObj.protocol + '//' + mns + urlObj.pathname + urlObj.search + urlObj.hash
  );
}
