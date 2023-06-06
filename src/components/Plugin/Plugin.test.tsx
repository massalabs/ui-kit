import { render, screen } from '@testing-library/react';
import { MassaWallet } from '../Icons/Svg/Massa/MassaWallet';
import { Plugin } from './Plugin';
import { Button } from '../Button/Button';
import { FiRefreshCcw, FiArrowUpRight, FiTrash2 } from 'react-icons/fi';

describe('Components | Buttons | Plugin', () => {
  test('it should render', () => {
    const args = {
      preIcon: <MassaWallet size={40} />,
      topAction: (
        <Button onClick={() => console.log('topAction')} variant="toggle">
          on
        </Button>
      ),
      title: `That's is the huge name of the plugin with limit of chars`,
      subtitle: `Author's Name`,
      actions: [
        <Button variant="icon" onClick={() => console.log('reload')}>
          <FiRefreshCcw />
        </Button>,
        <Button variant="icon" onClick={() => console.log('arrow')}>
          <FiArrowUpRight />
        </Button>,
        <Button variant="icon" onClick={() => console.log('trash')}>
          <FiTrash2 />
        </Button>,
      ],
    };
    render(<Plugin {...args} />);

    let plugin = screen.getByTestId('plugin');

    expect(plugin).toBeTruthy();
  });
});
