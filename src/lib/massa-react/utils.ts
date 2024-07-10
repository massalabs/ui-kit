import { IAccount, IAccountBalanceResponse } from '@massalabs/wallet-provider';

import {
  MASSA_EXPLO_EXTENSION,
  MASSA_EXPLO_URL,
  MASSA_EXPLORER_URL,
} from './const';
import Intl from './i18n';
import { toast } from '../../components';

import { Operation, PublicAPI } from '@massalabs/massa-web3';

export async function logSmartContractEvents(
  client: PublicAPI,
  operationId: string,
): Promise<void> {
  const op = new Operation(client, operationId);
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

export async function fetchMASBalance(
  account: IAccount,
): Promise<IAccountBalanceResponse> {
  try {
    return account.balance();
  } catch (error) {
    console.error('Error while retrieving balance: ', error);
    toast.error(Intl.t('balance.error'));
    return { finalBalance: '0', candidateBalance: '0' };
  }
}
