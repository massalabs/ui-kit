import { FiUser } from "react-icons/fi";
import { MassaToken } from "../Icons/Svg/Massa/MassaToken";
import { AccountSelector } from "./AccountSelector";

export default {
  title: "Components/Account Selector",
  component: AccountSelector,
};

const args = {
  avatar: <FiUser className="text-neutral h-6 w-6" />,
  accountName: "account #",
  icon: <MassaToken size={24} />,
  amount: "0,000.00",
};

export const _AccountSelector = {
  render: () => <AccountSelector {...args} />,
};
