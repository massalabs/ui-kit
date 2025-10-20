import { useCallback, useMemo, useState } from 'react';
import { Address, MRC20, Operation, Provider } from '@massalabs/massa-web3';
import { validateAmount } from '../utils/sendTransaction';
import { useHandleOperation } from './useHandleOperation';
import toast from 'react-hot-toast';

export interface Asset {
  decimals: number;
  balance: bigint;
  symbol: string;
  address?: string;
  isNative?: boolean;
  allowance?: bigint;
}

export interface SendParams {
  recipient: string;
  amount: bigint;
  asset: Asset;
}

export interface UseSendOptions {
  provider: Provider | null;
}

export function useSend(options: UseSendOptions) {
  const { provider } = options;
  const [isProcessing, setIsProcessing] = useState(false);
  const { handleOperation } = useHandleOperation();

  const execute = useCallback(
    async (
      sendFn: () => Promise<Operation>,
      asset: Asset,
      amount: bigint,
      recipient: string,
    ): Promise<void> => {
      console.log('execute', sendFn, asset, amount, recipient);
      console.log('provider', provider);
      if (!provider) throw new Error('No provider');
      console.log('provider', provider);
      setIsProcessing(true);

      const validation = validateAmount(amount, asset.balance, asset.decimals);
      console.log('validation', validation);
      if (!validation.valid) {
        toast.error(validation.error ?? 'Invalid amount');
        setIsProcessing(false);
        return;
      }

      console.log('validation passed');

      try {
        Address.fromString(recipient);
      } catch {
        toast.error('Invalid address');
        setIsProcessing(false);
        return;
      }

      console.log('recipient', recipient);
      try {
        const op = await sendFn();
        console.log('op', op);
        await handleOperation(op, {
          pending: `Sending ${amount} ${asset.symbol}`,
          success: `Sent ${amount} ${asset.symbol}`,
          error: `Error sending`,
          timeout: `Timeout sending`,
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [provider, handleOperation],
  );

  const sendMassa = useCallback(
    async ({ recipient, amount, asset }: SendParams): Promise<void> => {
      if (!provider) throw new Error('No provider');
      await execute(
        () => provider.transfer(recipient, amount),
        asset,
        amount,
        recipient,
      );
    },
    [provider, execute],
  );

  const sendToken = useCallback(
    async ({ recipient, amount, asset }: SendParams): Promise<void> => {
      if (!provider) throw new Error('No provider');
      if (!asset.address) throw new Error('Token address required');
      const mrc20 = new MRC20(provider, asset.address);

      const allowance = await mrc20.allowance(provider.address, recipient);
      if (allowance < amount) {
        toast.error('Insufficient allowance');
        return;
      }

      await execute(
        () => mrc20.transfer(recipient, amount),
        asset,
        amount,
        recipient,
      );
    },
    [provider, execute],
  );

  const sendAsset = useCallback(
    async ({ recipient, amount, asset }: SendParams): Promise<void> => {
      if (asset.isNative) {
        console.log('sendMassa', recipient, amount, asset);
        return sendMassa({ recipient, amount, asset });
      }

      return sendToken({ recipient, amount, asset });
    },
    [sendMassa, sendToken],
  );

  return useMemo(
    () => ({
      isProcessing,
      sendAsset,
    }),
    [isProcessing, sendAsset],
  );
}
