import {
  FiArrowUpRight,
  FiTrash2,
  FiRefreshCcw,
  FiDownload,
  FiAlertTriangle,
} from 'react-icons/fi';
import { MassaWallet } from '../Icons/Svg/Massa/MassaWallet';
import { Plugin } from './Plugin';
import { Button } from '../Button/Button';
import { Certificate } from '../Icons';
import { Tag } from '../Tag';

export default {
  title: 'Components/Plugin',
};
const argsOn = {
  preIcon: <img src="https://placehold.jp/40x40.png" />,
  topAction: <Button variant="toggle">on</Button>,
  topActionFunction: () => console.log('download'),
  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  tag: <Tag type="warning">Beta</Tag>,
  subtitleIcon: <Certificate />,
  version: '1.0.2',
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
    <Button disabled variant="toggle">
      off
    </Button>
  ),
  topActionFunction: () => console.log('download'),

  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  version: '1.0.2',
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
  topAction: <FiDownload />,
  topActionFunction: () => console.log('download'),
  title: `plugin name - 30 characters...`,
  subtitle: `Author's Name`,
  subtitleIcon: <Certificate />,
  version: '1.0.2',
  content: `Praesentium quo dicta voluptatem nulla beatae aut molestiae consectetur a quos rezcze zececzec zezczecze`,
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
export const _PluginStoreIncompatible = {
  render: () => (
    <Plugin
      {...argsStore}
      topActions={[
        <FiAlertTriangle color="#FFA41D" />,
        <FiDownload className="w-6 h-10 text-tertiary" />,
      ]}
    />
  ),
};
