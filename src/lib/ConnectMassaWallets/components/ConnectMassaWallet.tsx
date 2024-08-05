// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useEffect, useState } from 'react';

import { BearbySvg } from './BearbySvg';
import BearbyWallet from './BearbyWallet';
import SelectMassaWallet from './SelectMassaWallet';
import StationWallet from './StationWallet';
import { ChainStatus } from './Status/ChainStatus';
import SwitchWalletButton from './SwitchWalletButton';
import Intl from '../i18n';
import { useAccountStore } from '../store';
import { MassaWallet, Tooltip } from '../../../components';
import { SUPPORTED_MASSA_WALLETS } from '../../massa-react/const';

export const ConnectMassaWallet = () => {
  const { currentWallet, wallets, setCurrentWallet, isFetching } =
    useAccountStore();

  const [selectedProvider, setSelectedProvider] = useState<
    SUPPORTED_MASSA_WALLETS | undefined
  >(currentWallet?.name() as SUPPORTED_MASSA_WALLETS);

  useEffect(() => {
    const provider = wallets.find((p) => p.name() === selectedProvider);
    if (provider && !currentWallet) {
      setCurrentWallet(provider);
    }
  }, [wallets, selectedProvider, currentWallet, setCurrentWallet]);

  function renderWallet() {
    switch (selectedProvider) {
      case SUPPORTED_MASSA_WALLETS.MASSASTATION:
        return <StationWallet />;
      case SUPPORTED_MASSA_WALLETS.BEARBY:
        return <BearbyWallet />;
      default:
        // Should not happen
        return <>Error: no wallet selected</>;
    }
  }

  function renderSelectedWallet() {
    switch (selectedProvider) {
      case SUPPORTED_MASSA_WALLETS.MASSASTATION:
        return (
          <>
            <MassaWallet size={28} />
            {Intl.t(`connect-wallet.${SUPPORTED_MASSA_WALLETS.MASSASTATION}`)}
          </>
        );
      case SUPPORTED_MASSA_WALLETS.BEARBY:
        return (
          <>
            <BearbySvg />
            {Intl.t(`connect-wallet.${SUPPORTED_MASSA_WALLETS.BEARBY}`)}
          </>
        );
    }
  }

  const noWalletSelected = !selectedProvider || isFetching;

  function renderNoWalletSelected() {
    return (
      <SelectMassaWallet
        onClick={(providerName) => {
          setSelectedProvider(providerName);
          const provider = wallets.find((p) => p.name() === providerName);
          if (provider) {
            setCurrentWallet(provider);
          }
        }}
      />
    );
  }

  return (
    <div className="text-f-primary">
      {noWalletSelected ? (
        renderNoWalletSelected()
      ) : (
        <>
          <div
            data-testid="connect-massa-wallet"
            className="flex justify-between items-center mb-4"
          >
            <div className="flex gap-2 items-center">
              {renderSelectedWallet()}
              <ChainStatus />
              {selectedProvider === SUPPORTED_MASSA_WALLETS.BEARBY && (
                <Tooltip
                  customClass="mas-caption w-fit whitespace-nowrap"
                  body={Intl.t(
                    'connect-wallet.card-destination.non-massa-wallet',
                  )}
                />
              )}
            </div>
            <SwitchWalletButton
              onClick={() => {
                setSelectedProvider(undefined);
                setCurrentWallet();
              }}
            />
          </div>
          {renderWallet()}
        </>
      )}
    </div>
  );
};
