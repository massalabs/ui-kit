import { SideMenu } from './SideMenu';
import {
  FiHome,
  FiList,
  FiArrowUpRight,
  FiUsers,
  FiDisc,
  FiSettings,
  FiSun,
} from 'react-icons/fi';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';

export default { title: 'Components/SideMenu', component: SideMenu };

let conf = {
  title: 'MassaStation',
  logo: <MassaLogo />,
  // fullMode is false to be able to show in storybook.
  // For most of the time it will be true.
  fullMode: false,
};

let items = [
  {
    label: 'item one',
    icon: <FiHome />,
    active: false,
    footer: false,
    onClickItem: () => console.log('one'),
  },
  {
    label: 'item two',
    icon: <FiList />,
    active: false,
    footer: false,
    onClickItem: () => console.log('two'),
  },
  {
    label: 'item three',
    icon: <FiArrowUpRight />,
    active: false,
    footer: false,
    onClickItem: () => console.log('three'),
  },
  {
    label: 'item four',
    icon: <FiUsers />,
    active: true,
    footer: false,
    onClickItem: () => console.log('four'),
  },
  {
    label: 'item five',
    icon: <FiDisc />,
    active: false,
    footer: false,
    onClickItem: () => console.log('five'),
  },
  {
    label: 'item six',
    icon: <FiSettings />,
    active: false,
    footer: true,
    onClickItem: () => console.log('six'),
  },
  {
    label: 'item seven',
    icon: <FiSun />,
    active: false,
    footer: true,
    onClickItem: () => console.log('seven'),
  },
];

export const _SideMenu = {
  render: () => <SideMenu conf={conf} items={items} />,
};
