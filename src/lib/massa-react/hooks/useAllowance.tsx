import { useCallback, useMemo, useState } from 'react';
import { MRC20, Provider } from '@massalabs/massa-web3';
import { useHandleOperation } from './useHandleOperation';
import toast from 'react-hot-toast';
import { Asset } from './useSend';

export interface AllowanceParams {
  spender: string;
  amount: bigint;
  token: Asset;
}

export interface UseAllowanceOptions {
  provider: Provider | null;
}

export function useAllowance(options: UseAllowanceOptions) {
  const { provider } = options;
  const [isProcessing, setIsProcessing] = useState(false);
  const { handleOperation } = useHandleOperation();

  const increaseAllowance = useCallback(
    async ({ spender, amount, token }: AllowanceParams): Promise<void> => {
      if (!provider) throw new Error('No provider');
      setIsProcessing(true);
      if (!token.address) throw new Error('Token address required');
      const mrc20 = new MRC20(provider, token.address);
      try {
        const current = await mrc20.allowance(provider.address, spender);
        if (current >= amount) {
          toast.error('Already sufficient allowance');
          setIsProcessing(false);
          return;
        }
        const op = await mrc20.increaseAllowance(spender, amount - current);
        await handleOperation(op, {
          pending: `Increasing allowance ${amount} ${token.symbol}`,
          success: `Increased allowance ${amount} ${token.symbol}`,
          error: `Error increasing allowance`,
          timeout: `Timeout increasing allowance`,
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [provider, handleOperation],
  );

  const decreaseAllowance = useCallback(
    async ({ spender, amount, token }: AllowanceParams): Promise<void> => {
      if (!provider) throw new Error('No provider');
      setIsProcessing(true);
      if (!token.address) throw new Error('Token address required');
      const mrc20 = new MRC20(provider, token.address);
      try {
        const current = await mrc20.allowance(provider.address, spender);
        if (current < amount) {
          toast.error('Insufficient allowance to decrease by requested amount');
          setIsProcessing(false);
          return;
        }
        const op = await mrc20.decreaseAllowance(spender, amount);
        await handleOperation(op, {
          pending: `Decreasing allowance ${amount} ${token.symbol}`,
          success: `Decreased allowance ${amount} ${token.symbol}`,
          error: `Error decreasing allowance`,
          timeout: `Timeout decreasing allowance`,
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [provider, handleOperation],
  );

  return useMemo(
    () => ({ isProcessing, increaseAllowance, decreaseAllowance }),
    [isProcessing, increaseAllowance, decreaseAllowance],
  );
}
