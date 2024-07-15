// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useEffect, useState } from 'react';

import { IAccountBalanceResponse } from '@massalabs/wallet-provider';

import Intl from '../i18n';
import { useAccountStore } from '../store';
import { FetchingLine } from '../../../components';
import { fetchMASBalance } from '../../massa-react/utils';
import { massaToken } from '../../massa-react/const';
import { formatAmount } from '../../util/parseAmount';
import { Mas } from '@massalabs/massa-web3';

export function MASBalance() {
  const [balance, setBalance] = useState<IAccountBalanceResponse>();

  const { connectedAccount } = useAccountStore();

  useEffect(() => {
    if (!connectedAccount) return;
    fetchMASBalance(connectedAccount).then((balance) => {
      setBalance(balance);
    });
  }, [connectedAccount, setBalance]);

  const formattedBalance = formatAmount(
    Mas.fromString(balance?.candidateBalance || '0').toString(),
    9,
  ).full;

  return (
    <div className="flex gap-2 mas-body">
      {Intl.t('connect-wallet.connected-cards.wallet-balance')}
      {balance === undefined ? (
        <FetchingLine />
      ) : (
        <>
          {formattedBalance} {massaToken}
        </>
      )}
    </div>
  );
}
