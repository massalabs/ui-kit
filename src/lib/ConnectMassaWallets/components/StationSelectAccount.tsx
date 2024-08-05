// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useAccountStore } from '../store';
import { Dropdown } from '../../../components';
import { Provider } from '@massalabs/massa-web3';

export function StationSelectAccount() {
  const [accounts, connectedAccount, setConnectedAccount] = useAccountStore(
    (state) => [
      state.accounts,
      state.connectedAccount,
      state.setConnectedAccount,
    ],
  );

  const selectedAccountKey: number = (accounts || []).findIndex(
    (account) => account.accountName === connectedAccount?.accountName,
  );

  const onAccountChange = async (account: Provider) => {
    setConnectedAccount(account);
  };

  return (
    <Dropdown
      select={selectedAccountKey}
      options={(accounts || []).map((account: Provider) => {
        return {
          item: account.accountName,
          onClick: () => onAccountChange(account),
        };
      })}
    />
  );
}
