import { FiArrowUpRight, FiTrash2, FiRefreshCcw } from 'react-icons/fi';
import { MassaWallet } from '../Icons/Svg/Massa/MassaWallet';
import { Plugin } from './Plugin';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Plugin',
};

const argsOn = {
  preIcon: <MassaWallet variant="rounded" size={40} />,
  topAction: (
    <Button onClick={() => console.log('topAction')} variant="toggle">
      on
    </Button>
  ),
  title: `That's is the huge name of the plugin with limit of chars`,
  subtitle: `Author's Name`,
  actions: [
    <Button variant="icon" onClick={() => console.log('reload')}>
      <FiRefreshCcw className="text-s-warning" />
    </Button>,
    <Button variant="icon" onClick={() => console.log('arrow')}>
      <FiArrowUpRight />
    </Button>,
    <Button variant="icon" onClick={() => console.log('trash')}>
      <FiTrash2 />
    </Button>,
  ],
};

const argsOff = {
  preIcon: <MassaWallet variant="rounded" size={40} />,
  topAction: (
    <Button onClick={() => console.log('topAction')} disabled variant="toggle">
      off
    </Button>
  ),
  title: `That's is the huge name of the plugin with limit of chars`,
  subtitle: `Author's Name`,
  actions: [
    <Button variant="icon" disabled>
      <FiArrowUpRight />
    </Button>,
    <Button variant="icon">
      <FiTrash2 />
    </Button>,
  ],
};

export const _PluginOn = {
  render: () => <Plugin {...argsOn} />,
};

export const _PluginOff = {
  render: () => <Plugin {...argsOff} />,
};
