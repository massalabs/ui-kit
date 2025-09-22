import { useState, useEffect } from 'react';
import { resolveDeweb } from '@massalabs/massa-web3';

interface UseResolveDewebResult {
  resolvedUrl: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook to resolve DeWeb URLs using the massa-web3 resolveDeweb function
 * @param Url - The original URL to resolve (expl: https://mns.massa.network,
 * https://mns, https://mns.deweb.half-red.net/path ...)
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
    let isCanceled = false;

    const resolveUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Extract the path from the original URL to pass to resolveDeweb
        const pathToResolve = extractMNSUrl(Url);

        const resolved = await resolveDeweb(pathToResolve, chainId);
        if (isCanceled) return;
        setResolvedUrl(resolved);
      } catch (err) {
        if (isCanceled) return;
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to resolve DeWeb URL';
        setError(errorMessage);
      } finally {
        if (!isCanceled) {
          setIsLoading(false);
        }
      }
    };

    resolveUrl();
    // Cleanup cancels in-flight request
    return () => {
      isCanceled = true;
    };
  }, [Url, chainId]);

  return {
    resolvedUrl,
    isLoading,
    error,
  };
}

/**
 * Extracts the MNS from a DeWeb URL (expl: mns.massa.network to mns.massa)
 * @param url - the URL to extract the MNS from
 * @returns the MNS URL
 */
export function extractMNSUrl(url: string): string {
  const urlObj = new URL(url);
  let mns: string;
  if (urlObj.hostname.includes('.')) {
    mns = urlObj.hostname.split('.')[0] + '.massa';
  } else {
    // no subdomain, use the whole hostname as mns
    mns = urlObj.hostname + '.massa';
  }
  urlObj.hostname = mns;
  return urlObj.toString();
}
