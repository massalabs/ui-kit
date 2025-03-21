// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import { FetchingLine } from '../../../../components';
import { massaToken } from '../../../massa-react';
import { formatAmount } from '../../../util';
import { useAccountStore } from '../../store';
import Intl from '../../i18n';

export function MASBalance() {
  const { balance } = useAccountStore();

  const formattedBalance = formatAmount(balance?.toString() || '0', 9).full;

  return (
    <div className="flex gap-2 mas-body text-f-primary dark:text-f-primary">
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
