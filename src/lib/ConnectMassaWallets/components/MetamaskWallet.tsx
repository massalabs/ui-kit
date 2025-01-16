// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ConnectedAccount } from './ConnectedAccount';
import { MASBalance } from './MASBalance';
import { WalletError } from './WalletError';
import Intl from '../i18n';
import { useAccountStore } from '../store';
import { METAMASK_INSTALL } from '../../massa-react/utils/const';

export default function MetamaskWallet() {
  const { connectedAccount, isFetching } = useAccountStore();

  if (!connectedAccount && !isFetching) {
    return (
      <WalletError
        description={Intl.t(
          'connect-wallet.card-destination.meta-mask-not-connected',
        )}
        link={METAMASK_INSTALL}
        linkLabel={Intl.t('connect-wallet.card-destination.get-metamask')}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 mas-body">
      <ConnectedAccount />
      <MASBalance />
    </div>
  );
}
