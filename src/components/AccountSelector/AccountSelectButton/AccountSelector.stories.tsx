import { FiUser } from "react-icons/fi";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelectorButton } from "./AccountSelectorButton";

export default {
  title: "Components/Account Selector",
  component: AccountSelectorButton,
};

const args = {
  avatar: <FiUser className="text-neutral h-6 w-6" />,
  accountName: "account #",
  icon: <MassaToken size={24} />,
  amount: "0,000.00",
};

export const _AccountSelector = {
  render: () => <AccountSelectorButton {...args} />,
};
