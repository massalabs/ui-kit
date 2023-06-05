import { FiArrowUpRight } from 'react-icons/fi';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';
import { Transaction } from './Transaction';

export default {
  title: 'Components/Transaction',
};

const args = {
  preIcon: <FiArrowUpRight />,
  title: 'Transaction category',
  address: '0x71c081f64f7bfe8ecb486029875f8e088db220649c62ab2c253da6c471ae137b',
  posIcon: <MassaLogo size={24} />,
  amount: '0,00',
  date: 'Friday, 05:00 PM',
};

export const _Primary = {
  render: () => <Transaction {...args} />,
};

export const _Secondary = {
  render: () => <Transaction variant="secondary" {...args} />,
};
