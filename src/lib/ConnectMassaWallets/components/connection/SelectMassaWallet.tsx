// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { BearbySvg } from '../logo/BearbySvg';

import Intl from '../../i18n';
import { Dropdown, MassaWallet } from '../../../../components';
import { WalletName } from '@massalabs/wallet-provider';
import { MetaMaskSvg } from '../logo/MetaMaskSvg';
import { Disconnected } from '../Status/Disconnected';

const walletList = [
  {
    name: WalletName.MassaWallet,
    icon: <MassaWallet size={32} />,
  },
  {
    name: WalletName.Bearby,
    icon: <BearbySvg />,
  },
  {
    name: WalletName.Metamask,
    icon: <MetaMaskSvg />,
  },
];

interface SelectMassaWalletProps {
  onClick: (providerName: WalletName) => void;
}

const SelectMassaWallet = ({ onClick }: SelectMassaWalletProps) => {
  const walletOptions = () => {
    return walletList.map((provider) => ({
      item: Intl.t(`connect-wallet.${provider.name}`),
      icon: provider.icon,
      onClick: () => onClick(provider.name),
    }));
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center mb-4">
        <p className="mas-body flex-col justify-center text-f-primary dark:text-f-primary">
          {Intl.t('connect-wallet.card-destination.to')}
        </p>
        <Disconnected />
      </div>
      <div className="w-full">
        <Dropdown
          options={walletOptions()}
          defaultItem={{
            item: Intl.t('connect-wallet.card-destination.select-wallet'),
          }}
        />
      </div>
    </>
  );
};

export default SelectMassaWallet;
