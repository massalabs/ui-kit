import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PluginWallet } from './PluginWallet';

describe('Components | PluginWallet', () => {
  test('it should render', () => {
    render(
      <PluginWallet
        isActive={true}
        isLoading={false}
        title={'Massawallet'}
        iconActive={null}
        iconInactive={null}
        onClickActive={() => console.log('intall')}
        onClickInactive={() => console.log('launch')}
      />,
    );

    let pluginWallet = screen.getByTestId('plugin-wallet');

    expect(pluginWallet).toBeInTheDocument();
  });
});
