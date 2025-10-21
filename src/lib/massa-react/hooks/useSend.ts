import { useCallback, useMemo, useState } from 'react';
import { Address, MRC20, Operation, Provider } from '@massalabs/massa-web3';
import { useHandleOperation } from './useHandleOperation';
import toast from 'react-hot-toast';
import { formatAmount } from '../../util';
import { Asset } from './types';

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

  /**
   * Executes a send operation
   * @param sendFn - The function to send the asset
   * @param asset - The asset to send
   * @param amount - The amount to send
   * @param recipient - The recipient address
   * @returns void
   */
  const execute = useCallback(
    async (
      sendFn: () => Promise<Operation>,
      asset: Asset,
      amount: bigint,
      recipient: string,
    ): Promise<void> => {
      setIsProcessing(true);

      if (!provider) throw new Error('No provider');

      try {
        Address.fromString(recipient);
      } catch {
        toast.error('Invalid address');
        return;
      }

      if (amount > asset.balance) {
        toast.error('Insufficient balance');
        return;
      }

      try {
        const op = await sendFn();

        await handleOperation(op, {
          pending: `Sending ${
            formatAmount(amount.toString(), asset.decimals).preview
          } ${asset.symbol}`,
          success: `Sent ${
            formatAmount(amount.toString(), asset.decimals).preview
          } ${asset.symbol}`,
          error: `Error sending`,
          timeout: `Timeout sending`,
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [provider, handleOperation],
  );

  /**
   * Sends a native Massa coin to a recipient
   * @param recipient - The recipient address
   * @param amount - The amount to send
   * @param asset - The asset to send
   * @returns void
   */
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

  /**
   * Sends a mrc20 token to a recipient
   * @param recipient - The recipient address
   * @param amount - The amount to send
   * @param asset - The token to send
   * @returns void
   */
  const sendToken = useCallback(
    async ({ recipient, amount, asset }: SendParams): Promise<void> => {
      if (!provider) throw new Error('No provider');
      if (!asset.address) throw new Error('Token address required');
      const mrc20 = new MRC20(provider, asset.address);

      await execute(
        () => mrc20.transfer(recipient, amount),
        asset,
        amount,
        recipient,
      );
    },
    [provider, execute],
  );

  /**
   * Sends an asset to a recipient
   * The Asset can be a native Massa coin or a mrc20 token
   * @param recipient - The recipient address
   * @param amount - The amount to send
   * @param asset - The asset to send
   * @returns void
   */
  const sendAsset = useCallback(
    async ({ recipient, amount, asset }: SendParams): Promise<void> => {
      if (asset.isNative) {
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
      sendMassa,
      sendToken,
    }),
    [isProcessing, sendAsset, sendMassa, sendToken],
  );
}
