import { PluginWallet } from './PluginWallet';
import WalletActive from '../../assets/plugins/wallet/walletActive.svg';
import WalletInactive from '../../assets/plugins/wallet/walletInactive.svg';

export default { title: 'Components/PluginWallet', component: PluginWallet };

export const _PluginWalletActive = {
  render: () => (
    <div className="sm:w-80">
      <PluginWallet
        isActive={true}
        isLoading={false}
        title={'Massa Wallet'}
        iconActive={<WalletActive />}
        iconInactive={<WalletInactive />}
        onClickActive={() => console.log('intall')}
        onClickInactive={() => console.log('launch')}
      />
    </div>
  ),
};

export const _PluginWalletIncative = {
  render: () => (
    <div className="sm:w-80">
      <PluginWallet
        isActive={false}
        isLoading={false}
        title={'Massa Wallet'}
        iconActive={<WalletActive />}
        iconInactive={<WalletInactive />}
        onClickActive={() => console.log('intall')}
        onClickInactive={() => console.log('launch')}
      />
    </div>
  ),
};

export const _PluginWalletLoading = {
  render: () => (
    <div className="sm:w-80">
      <PluginWallet
        isActive={false}
        isLoading={true}
        title={'Massa Wallet'}
        iconActive={<WalletActive />}
        iconInactive={<WalletInactive />}
        onClickActive={() => console.log('intall')}
        onClickInactive={() => console.log('launch')}
      />
    </div>
  ),
};
