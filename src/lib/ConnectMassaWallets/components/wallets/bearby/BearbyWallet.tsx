// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ConnectedAccount } from '../../connection/ConnectedAccount';
import { MASBalance } from '../../utils/MASBalance';
import { WalletError } from '../../utils/WalletError';
import Intl from '../../../i18n';
import { useAccountStore } from '../../../store';
import { BEARBY_INSTALL } from '../../../../massa-react/utils/const';

export default function BearbyWallet() {
  const { connectedAccount, isFetching } = useAccountStore();

  if (!connectedAccount && !isFetching) {
    return (
      <WalletError
        description={Intl.t(
          'connect-wallet.card-destination.bearby-not-installed',
        )}
        link={BEARBY_INSTALL}
        linkLabel={Intl.t('connect-wallet.card-destination.get-bearby')}
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
