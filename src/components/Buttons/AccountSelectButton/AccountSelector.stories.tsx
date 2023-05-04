import { FiUser } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
// import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelectorButton } from "./AccountSelectorButton";

export default {
  title: "Components/Account Selector",
  component: AccountSelectorButton,
};

const theme = "theme-dark";

// args passsed trough the account selector button
const args = {
  profileimage: <FiUser className="text-neutral h-6 w-6" />,
  accountname: "account #",
  // The FiClock is used to simulate the svg component which will be implemented in the future
  svg: <FiClock className="text-neutral h-4 w-4" />,
  accountbalance: "0,000.00",
};

export const _AccountSelector = {
  render: () => (
    // this div below is used to simulate the theme
    <div className={theme + " bg-primary w-full h-fit  p-6 flex flex-col"}>
      <p className="text-neutral"> {theme} </p>
      <AccountSelectorButton {...args} />
    </div>
  ),
};
