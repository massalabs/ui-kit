import { MetaMaskSvg } from './MetaMaskSvg';
import { BearbySvg } from './BearbySvg';
import BearbyWallet from './BearbyWallet';
import SelectMassaWallet from './SelectMassaWallet';
import StationWallet from './StationWallet';
import { ChainStatus } from './Status/ChainStatus';
import SwitchWalletButton from './SwitchWalletButton';
import Intl from '../i18n';
import { useAccountStore } from '../store';
import { MassaWallet, Tooltip } from '../../../components';
import { WalletName } from '@massalabs/wallet-provider';
import MetamaskWallet from './MetamaskWallet';
import { Network } from './Network';
import { useEffect, useState } from 'react';

export const ConnectMassaWallet = () => {
  const { currentWallet, wallets, setCurrentWallet, isFetching } =
    useAccountStore();
  const [selectedWallet, setSelectedWallet] = useState<WalletName | null>(null);

  useEffect(() => {
    if (currentWallet) {
      setSelectedWallet(currentWallet.name());
    }
  }, [currentWallet]);

  function renderWallet() {
    switch (selectedWallet) {
      case WalletName.MassaStation:
        return <StationWallet />;
      case WalletName.Bearby:
        return <BearbyWallet />;
      case WalletName.Metamask:
        return <MetamaskWallet />;
      default:
        // Should not happen
        return <>Error: no wallet selected</>;
    }
  }

  function renderSelectedWallet() {
    switch (selectedWallet) {
      case WalletName.MassaStation:
        return (
          <>
            <MassaWallet size={28} />
            {Intl.t(`connect-wallet.${WalletName.MassaStation}`)}
          </>
        );
      case WalletName.Bearby:
        return (
          <>
            <BearbySvg />
            {Intl.t(`connect-wallet.${WalletName.Bearby}`)}
          </>
        );
      case WalletName.Metamask:
        return (
          <>
            <MetaMaskSvg />
            {Intl.t(`connect-wallet.${WalletName.Metamask}`)}
          </>
        );
    }
  }

  if (!selectedWallet && !isFetching) {
    return (
      <div className="text-f-primary">
        <SelectMassaWallet
          onClick={async (providerName) => {
            const wallet = wallets.find((p) => p.name() === providerName);
            if (wallet) {
              await setCurrentWallet(wallet);
            }
            setSelectedWallet(providerName);
          }}
        />
      </div>
    );
  }

  return (
    <div className="text-f-primary">
      <div
        data-testid="connect-massa-wallet"
        className="flex justify-between items-center mb-4"
      >
        <div className="flex gap-2 items-center">
          {renderSelectedWallet()}
          <ChainStatus />
          <Network />
          {currentWallet?.name() === WalletName.Bearby && (
            <Tooltip
              customClass="mas-caption w-fit whitespace-nowrap"
              body={Intl.t('connect-wallet.card-destination.non-massa-wallet')}
            />
          )}
        </div>
        <SwitchWalletButton
          onClick={() => {
            setCurrentWallet();
            setSelectedWallet(null);
          }}
        />
      </div>

      {renderWallet()}
    </div>
  );
};
