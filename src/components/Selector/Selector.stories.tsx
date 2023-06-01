import { FiArrowUpRight } from 'react-icons/fi';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';
import { Selector } from './Selector';

export default {
  title: 'Components/Selector',
};

const args = {
  preIcon: <FiArrowUpRight />,
  content: 'account #',
  posIcon: <MassaLogo size={24} />,
  amount: '0,000.00',
};

export const _Primary = {
  render: () => <Selector {...args} customClass="!w-1/2" />,
};

export const _Secondary = {
  render: () => <Selector variant="secondary" customClass="!w-1/2" {...args} />,
};
