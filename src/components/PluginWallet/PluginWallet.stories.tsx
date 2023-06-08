import { PluginWallet } from './PluginWallet';
import WalletActive from '../../assets/plugins/wallet/walletActive.svg';
import WalletInactive from '../../assets/plugins/wallet/walletInactive.svg';

export default { title: 'Components/PluginWallet', component: PluginWallet };

export const _PluginWalletActive = {
  render: () => (
    <div className="sm:w-80">
      <PluginWallet
        isActive={true}
        title={'Massawallet'}
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
        title={'Massawallet'}
        iconActive={<WalletActive />}
        iconInactive={<WalletInactive />}
        onClickActive={() => console.log('intall')}
        onClickInactive={() => console.log('launch')}
      />
    </div>
  ),
};
