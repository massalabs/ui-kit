import { PluginWallet } from './PluginWallet';
import WalletActive from '../../assets/plugins/wallet/walletActive.svg';
import WalletInactive from '../../assets/plugins/wallet/walletInactive.svg';

export default { title: 'Components/PluginWallet', component: PluginWallet };

export const _PluginWalletActive = {
  render: () => (
    <PluginWallet
      isActive={true}
      title={'Massawallet'}
      iconActive={<WalletActive />}
      iconInactive={<WalletInactive />}
      onClickActive={() => console.log('intall')}
      onClickInactive={() => console.log('launch')}
    />
  ),
};

export const _PluginWalletIncative = {
  render: () => (
    <PluginWallet
      isActive={false}
      title={'Massawallet'}
      iconActive={<WalletActive />}
      iconInactive={<WalletInactive />}
      onClickActive={() => console.log('intall')}
      onClickInactive={() => console.log('launch')}
    />
  ),
};
