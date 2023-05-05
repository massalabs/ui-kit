import { FiUser } from "react-icons/fi";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelectorButton } from "./AccountSelectorButton";

export default {
  title: "Components/Account Selector",
  component: AccountSelectorButton,
};

const theme = "theme-light";

// args passsed trough the account selector button
const args = {
  profileimage: <FiUser className="text-neutral h-6 w-6" />,
  accountname: "account #",
  svg: <MassaToken size={"24"} />,
  accountbalance: "0,000.00",
};

export const _AccountSelector = {
  render: () => (
    <div className={theme + " bg-primary w-full h-fit  p-6 flex flex-col"}>
      <p className="text-neutral"> {theme} </p>
      <AccountSelectorButton {...args} />
    </div>
  ),
};
