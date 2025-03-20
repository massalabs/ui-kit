import {
  MASSA_EXPLO_EXTENSION,
  MASSA_EXPLO_URL,
  MASSA_EXPLORER_URL,
} from './const';
import Intl from '../i18n';
import { toast, ToastContent } from '../../../components';

import { Operation, Provider, PublicProvider } from '@massalabs/massa-web3';
import { Toast } from 'react-hot-toast';
import { OperationToast } from '../../ConnectMassaWallets/components/utils/OperationToast';

export async function logSmartContractEvents(
  provider: PublicProvider,
  operationId: string,
): Promise<void> {
  const op = new Operation(provider, operationId);
  const event = await op.getFinalEvents();

  for (const e of event) {
    console.error(`opId ${operationId}: ${e}`);
  }
}

export function generateExplorerLink(opId: string, isMainnet = true): string {
  const buildnetExplorerUrl = `${MASSA_EXPLO_URL}${opId}${MASSA_EXPLO_EXTENSION}`;
  const mainnetExplorerUrl = `${MASSA_EXPLORER_URL}${opId}`;
  const explorerUrl = isMainnet ? mainnetExplorerUrl : buildnetExplorerUrl;

  return explorerUrl;
}

/**
 * Masks the middle of an address with a specified character.
 * @param str - The address to mask.
 * @param mask - The character to use for masking. Defaults to `.`.
 * @returns The masked address.
 */
export function maskAddress(str: string, length = 4, mask = '...'): string {
  const start = length;
  const end = str?.length - length;

  return str ? str?.substring(0, start) + mask + str?.substring(end) : '';
}

export function maskNickname(str: string, length = 32): string {
  if (!str) return '';

  if (str.length <= length) return str;

  return str?.substring(0, length) + '...';
}

export async function fetchMASBalance(account: Provider): Promise<bigint> {
  try {
    return account.balance(true);
  } catch (error) {
    console.error('Error while retrieving balance: ', error);
    toast.error(Intl.t('balance.error'));
    return BigInt(0);
  }
}

export function showToast(
  type: 'loading' | 'error' | 'success',
  message: string,
  operationId?: string,
  isMainnet?: boolean,
  duration = 5000,
) {
  const content = (t: Toast) => (
    <ToastContent t={t}>
      <OperationToast
        isMainnet={isMainnet}
        title={message}
        operationId={operationId}
      />
    </ToastContent>
  );

  if (type === 'loading') {
    return toast.loading(content, { duration: Infinity });
  } else if (type === 'error') {
    toast.error(content, { duration });
  } else {
    toast.success(content, { duration });
  }
}

export * from './const';
