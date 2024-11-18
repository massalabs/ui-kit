// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ConnectedAccount } from './ConnectedAccount';
import { MASBalance } from './MASBalance';
import { WalletError } from './WalletError';
import Intl from '../i18n';
import { useAccountStore } from '../store';
import { METAMASK_INSTALL } from '../../massa-react/const';
import { Button } from '../../../components';
import { CHAIN_ID, Network } from '@massalabs/massa-web3';

export default function MetamaskWallet() {
  const { connectedAccount, currentWallet, network, isFetching } =
    useAccountStore();

  function handleSwitchNetwork(network: Network): void {
    if (!currentWallet) return;
    if (network.chainId === CHAIN_ID.Mainnet) {
      currentWallet.setRpcUrl('https://buildnet.massa.net/api/v2');
    } else {
      currentWallet.setRpcUrl('https://mainnet.massa.net/api/v2');
    }
  }

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
      {network && currentWallet && (
        <div className="flex gap-4">
          <SwitchNetwork
            networkName={network.name === 'mainnet' ? 'buildnet' : 'mainnet'}
            onClick={() => handleSwitchNetwork(network)}
          />
        </div>
      )}
    </div>
  );
}

function SwitchNetwork({
  networkName,
  onClick,
}: {
  networkName: string;
  onClick: () => void;
}) {
  return <Button onClick={onClick}>Switch To {networkName}</Button>;
}
