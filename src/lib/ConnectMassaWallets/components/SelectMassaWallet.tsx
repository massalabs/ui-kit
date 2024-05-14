// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { BearbySvg } from './BearbySvg';
import { Disconnected } from './Status/Disconnected';
import Intl from '../i18n';
import { Dropdown, MassaWallet } from '../../../components';
import { SUPPORTED_MASSA_WALLETS } from '../../massa-react/const';

const walletList = [
  {
    name: SUPPORTED_MASSA_WALLETS.MASSASTATION,
    icon: <MassaWallet size={32} />,
  },
  {
    name: SUPPORTED_MASSA_WALLETS.BEARBY,
    icon: <BearbySvg />,
  },
];

interface SelectMassaWalletProps {
  onClick: (providerName: SUPPORTED_MASSA_WALLETS) => void;
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
      <div className="flex gap-2 items-center mb-4">
        <p className="mas-body flex-col justify-center">
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
