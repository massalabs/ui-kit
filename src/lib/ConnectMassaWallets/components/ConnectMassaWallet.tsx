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

export const ConnectMassaWallet = () => {
  const { currentWallet, wallets, setCurrentWallet, isFetching } =
    useAccountStore();

  function renderWallet() {
    switch (currentWallet?.name()) {
      case WalletName.MassaStation:
        return <StationWallet />;
      case WalletName.Bearby:
        return <BearbyWallet />;
      default:
        // Should not happen
        return <>Error: no wallet selected</>;
    }
  }

  function renderSelectedWallet() {
    switch (currentWallet?.name()) {
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
    }
  }

  if (!currentWallet) {
    return (
      <div className="text-f-primary">
        <SelectMassaWallet
          onClick={async (providerName) => {
            const provider = wallets.find((p) => p.name() === providerName);
            if (provider) {
              await setCurrentWallet(provider);
            }
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
          }}
        />
      </div>

      {!isFetching && renderWallet()}
    </div>
  );
};
