import { Client } from '@massalabs/massa-web3';
import { IAccount, IAccountBalanceResponse } from '@massalabs/wallet-provider';

import {
  MASSA_EXPLO_EXTENSION,
  MASSA_EXPLO_URL,
  MASSA_EXPLORER_URL,
} from './const';
import Intl from './i18n';
import { toast } from '../../components';

export function logSmartContractEvents(
  client: Client,
  operationId: string,
): void {
  client
    .smartContracts()
    .getFilteredScOutputEvents({
      emitter_address: null,
      start: null,
      end: null,
      original_caller_address: null,
      original_operation_id: operationId,
      is_final: null,
    })
    .then((events) => {
      events.map((l) =>
        console.error(`opId ${operationId}: execution error ${l.data}`),
      );
    });
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
