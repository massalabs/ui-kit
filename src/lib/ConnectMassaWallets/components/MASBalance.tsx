// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';

import Intl from '../i18n';
import { useAccountStore } from '../store';
import { FetchingLine } from '../../../components';
import { massaToken } from '../../massa-react/utils/const';
import { formatAmount } from '../../util/parseAmount';

export function MASBalance() {
  const { balance } = useAccountStore();

  const formattedBalance = formatAmount(balance?.toString() || '0', 9).full;

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
