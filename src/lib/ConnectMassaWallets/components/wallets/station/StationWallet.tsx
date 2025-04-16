// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useEffect, useState } from 'react';

import {
  isMassaStationAvailable,
  isMassaWalletEnabled,
} from '@massalabs/wallet-provider';

import { ConnectedAccount } from '../../connection/ConnectedAccount';

import { WalletError } from '../../utils/WalletError';
import {
  MASSA_STATION_INSTALL,
  MASSA_STATION_STORE,
  MASSA_WALLET_CREATE_ACCOUNT,
} from '../../../../massa-react/utils/const';
import Intl from '../../../i18n';
import { useAccountStore } from '../../../store';
import { MASBalance } from '../../utils/MASBalance';
import { StationSelectAccount } from './StationSelectAccount';

const LoadingState = ({ message }: { message: string }) => (
  <div className="flex items-center gap-3 p-4 bg-secondary/5 dark:bg-primary/5 rounded-lg">
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
    </div>
    <p className="text-sm font-medium text-f-primary dark:text-f-primary">
      {message}
    </p>
  </div>
);

export default function StationWallet() {
  const { accounts, isFetching } = useAccountStore();
  const [isLoading, setIsLoading] = useState(true);
  const [stationIsOn, setStationIsOn] = useState<boolean | undefined>(
    undefined,
  );
  const [massaWalletIsOn, setMassaWalletIsOn] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const checkWallets = async () => {
      try {
        const [stationResult, walletResult] = await Promise.all([
          isMassaStationAvailable(),
          isMassaWalletEnabled(),
        ]);
        setStationIsOn(stationResult);
        setMassaWalletIsOn(walletResult);
      } catch (error) {
        console.error('Error checking wallet availability:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkWallets();
  }, []); // Empty dependency array since we only want to run this once

  // Show loading state while checking wallet availability
  if (isLoading) {
    return (
      <LoadingState
        message={Intl.t('connect-wallet.card-destination.checking-wallet')}
      />
    );
  }

  // Show loading state while fetching accounts
  if (isFetching) {
    return (
      <LoadingState
        message={Intl.t('connect-wallet.card-destination.fetching-accounts')}
      />
    );
  }

  // Show error if Massa Station is not available
  if (stationIsOn === false) {
    return (
      <WalletError
        description={Intl.t(
          'connect-wallet.card-destination.massa-station-not-detected',
        )}
        link={MASSA_STATION_INSTALL}
        linkLabel={Intl.t('connect-wallet.card-destination.get-massa-station')}
      />
    );
  }

  // Show error if Massa Wallet is not enabled
  if (massaWalletIsOn === false) {
    return (
      <WalletError
        description={Intl.t(
          'connect-wallet.card-destination.massa-wallet-not-detected',
        )}
        link={MASSA_STATION_STORE}
        linkLabel={Intl.t('connect-wallet.card-destination.get-massa-wallet')}
      />
    );
  }

  // Show error if no accounts are available
  if (accounts !== undefined && !accounts.length) {
    return (
      <WalletError
        description={Intl.t(
          'connect-wallet.card-destination.massa-wallet-no-account',
        )}
        link={MASSA_WALLET_CREATE_ACCOUNT}
        linkLabel={Intl.t(
          'connect-wallet.card-destination.massa-wallet-create-account',
        )}
      />
    );
  }

  // Show loading state if accounts are undefined
  if (accounts === undefined) {
    return (
      <LoadingState
        message={Intl.t('connect-wallet.card-destination.loading-accounts')}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 mas-body text-f-primary dark:text-f-primary">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <StationSelectAccount />
        </div>
        <div className="w-full sm:w-1/2">
          <ConnectedAccount maskLength={5} />
        </div>
      </div>
      <MASBalance />
    </div>
  );
}
