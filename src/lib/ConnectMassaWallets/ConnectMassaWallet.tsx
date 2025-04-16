import { MetaMaskSvg } from './components/logo/MetaMaskSvg';
import { BearbySvg } from './components/logo/BearbySvg';
import BearbyWallet from './components/wallets/bearby/BearbyWallet';
import SelectMassaWallet from './components/connection/SelectMassaWallet';
import StationWallet from './components/wallets/station/StationWallet';

import SwitchWalletButton from './components/connection/SwitchWalletButton';
import Intl from './i18n';
import { useAccountStore } from './store';
import { MassaWallet, Tooltip } from '../../components';
import { WalletName } from '@massalabs/wallet-provider';
import MetamaskWallet from './components/wallets/metamask/MetamaskWallet';
import { Network } from './components/utils/Network';
import { useEffect, useState, useCallback } from 'react';
import { ChainStatus } from './components/Status/ChainStatus';

interface WalletIconProps {
  walletName: WalletName;
}

const WalletIcon: React.FC<WalletIconProps> = ({ walletName }) => {
  switch (walletName) {
    case WalletName.MassaWallet:
      return <MassaWallet size={28} />;
    case WalletName.Bearby:
      return <BearbySvg />;
    case WalletName.Metamask:
      return <MetaMaskSvg />;
    default:
      return null;
  }
};

interface WalletContentProps {
  walletName: WalletName;
}

const WalletContent: React.FC<WalletContentProps> = ({ walletName }) => {
  switch (walletName) {
    case WalletName.MassaWallet:
      return <StationWallet />;
    case WalletName.Bearby:
      return <BearbyWallet />;
    case WalletName.Metamask:
      return <MetamaskWallet />;
    default:
      return <>Error: no wallet selected</>;
  }
};

export const ConnectMassaWallet: React.FC = () => {
  const { currentWallet, wallets, setCurrentWallet, isFetching } =
    useAccountStore();
  const [selectedWallet, setSelectedWallet] = useState<WalletName | null>(null);

  useEffect(() => {
    if (currentWallet) {
      setSelectedWallet(currentWallet.name());
    }
  }, [currentWallet]);

  const handleWalletSelect = useCallback(
    async (providerName: WalletName) => {
      const wallet = wallets.find((p) => p.name() === providerName);
      if (wallet) {
        await setCurrentWallet(wallet);
      }
      setSelectedWallet(providerName);
    },
    [wallets, setCurrentWallet],
  );

  const handleWalletSwitch = useCallback(() => {
    setCurrentWallet();
    setSelectedWallet(null);
  }, [setCurrentWallet]);

  if (!selectedWallet && !isFetching) {
    return (
      <div className="text-f-primary dark:text-f-primary w-full">
        <SelectMassaWallet onClick={handleWalletSelect} />
      </div>
    );
  }

  return (
    <div className="text-f-primary dark:text-f-primary w-full">
      <div
        data-testid="connect-massa-wallet"
        className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-4"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          {selectedWallet && (
            <div className="flex items-center gap-2">
              <WalletIcon walletName={selectedWallet} />
              <span className="text-sm sm:text-base">
                {Intl.t(`connect-wallet.${selectedWallet}`)}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <ChainStatus />
            <Network />
          </div>
          {currentWallet?.name() === WalletName.Bearby && (
            <Tooltip
              triggerClassName="whitespace-nowrap"
              tooltipClassName="mas-caption"
              body={Intl.t('connect-wallet.card-destination.non-massa-wallet')}
            />
          )}
        </div>
        <div className="w-full sm:w-auto flex justify-center">
          <SwitchWalletButton onClick={handleWalletSwitch} />
        </div>
      </div>

      {selectedWallet && <WalletContent walletName={selectedWallet} />}
    </div>
  );
};
