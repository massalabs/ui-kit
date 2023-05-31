import { FiArrowUpRight } from 'react-icons/fi';
import { MassaToken } from '../Icons/Svg/Massa/MassaToken';
import { AccountSelector } from './AccountSelector';

export default {
  title: 'Components/Account Selector',
};

const args = {
  avatar: <FiArrowUpRight />,
  accountName: 'account #',
  icon: <MassaToken size={24} />,
  amount: '0,000.00',
};

export const _Primary = {
  render: () => <AccountSelector {...args} customClass="w-1/2" />,
};

export const _Secondary = {
  render: () => (
    <AccountSelector variant="secondary" customClass="w-1/2" {...args} />
  ),
};
