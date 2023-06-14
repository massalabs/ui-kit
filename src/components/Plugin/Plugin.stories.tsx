import {
  FiArrowUpRight,
  FiTrash2,
  FiRefreshCcw,
  FiDownload,
} from 'react-icons/fi';
import { MassaWallet } from '../Icons/Svg/Massa/MassaWallet';
import { Plugin } from './Plugin';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Plugin',
};

const argsOn = {
  preIcon: <img src="https://placehold.jp/40x40.png" />,
  topAction: (
    <Button onClick={() => console.log('topAction')} variant="toggle">
      on
    </Button>
  ),
  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  content: [
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
  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  content: [
    <Button variant="icon" disabled>
      <FiArrowUpRight />
    </Button>,
    <Button variant="icon">
      <FiTrash2 />
    </Button>,
  ],
};

const argsStore = {
  preIcon: <MassaWallet variant="rounded" size={40} />,
  topAction: <FiDownload onClick={() => console.log('download')} />,
  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  content: `plugin description - 80 characters max to let users know what the plugin does...`,
};

export const _PluginOn = {
  render: () => <Plugin {...argsOn} />,
};

export const _PluginOff = {
  render: () => <Plugin {...argsOff} />,
};

export const _PluginStore = {
  render: () => <Plugin {...argsStore} />,
};
