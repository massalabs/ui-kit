import { FiUser } from "react-icons/fi";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelector } from "./AccountSelector";

export default { title: "buttons", component: AccountSelector };

const theme = "theme-light";

const args = {
  profileImage: <FiUser className="text-neutral" />,
  accountName: "account #",
  massaToken: <MassaToken theme={theme} />,
  accountBalance: "0,000.00",
};

export const _AccountSelector = {
  render: () => (
    <div className={theme}>
      <AccountSelector {...args} />
    </div>
  ),
};
