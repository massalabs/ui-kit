import { DashboardStation } from './DashboardStation';
import Image1Dark from '../../assets/subduedImages/dark/1.svg';
import Image2Dark from '../../assets/subduedImages/dark/2.svg';
import Image3Dark from '../../assets/subduedImages/dark/3.svg';
import Image4Dark from '../../assets/subduedImages/dark/4.svg';
import Image5Dark from '../../assets/subduedImages/dark/5.svg';
import Image1Light from '../../assets/subduedImages/light/1.svg';
import Image2Light from '../../assets/subduedImages/light/2.svg';
import Image3Light from '../../assets/subduedImages/light/3.svg';
import Image4Light from '../../assets/subduedImages/light/4.svg';
import Image5Light from '../../assets/subduedImages/light/5.svg';
import { PluginWallet } from '../PluginWallet';
import WalletActive from '../../assets/plugins/wallet/walletActive.svg';
import WalletInactive from '../../assets/plugins/wallet/walletInactive.svg';

export default {
  title: 'Components/DashboardStation',
  component: DashboardStation,
};

export const _DashboardStation = {
  render: () => (
    <>
      <DashboardStation
        imagesDark={[
          <Image1Dark />,
          <Image2Dark />,
          <Image3Dark />,
          <Image4Dark />,
          <Image5Dark />,
          <Image1Dark />,
        ]}
        imagesLight={[
          <Image1Light />,
          <Image2Light />,
          <Image3Light />,
          <Image4Light />,
          <Image5Light />,
          <Image1Light />,
        ]}
        components={[
          <PluginWallet
            isActive={true}
            title={'Massawallet'}
            iconActive={<WalletActive />}
            iconInactive={<WalletInactive />}
            onClickActive={() => console.log('intall')}
            onClickInactive={() => console.log('launch')}
          />,
          <Image4Light />,
        ]}
      />
    </>
  ),
};
