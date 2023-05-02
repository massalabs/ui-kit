import { FiUser } from "react-icons/fi";
<<<<<<< HEAD
import { FiClock } from "react-icons/fi";
// import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelectorButton } from "./AccountSelectorButton";

export default {
  title: "Components/Account Selector",
  component: AccountSelectorButton,
};

const theme = "theme-light";

// args passsed trough the account selector button
// args passsed trough the account selector button
const args = {
  profileimage: <FiUser className="text-neutral h-6 w-6" />,
  accountname: "account #",
  // theme for token to be passed as props to the svg component which is located
  // You have to pass theme in order to set corrent masstoken bg
  svg: <FiClock className="text-neutral" />,
  accountbalance: "0,000.00",
=======
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelector } from "./AccountSelector";

export default { title: "buttons", component: AccountSelector };

const theme = "theme-light";

const args = {
  profileImage: <FiUser className="text-neutral" />,
  accountName: "account #",
  massaToken: <MassaToken theme={theme} />,
  accountBalance: "0,000.00",
>>>>>>> 4352c6d (added select account button + default theme variation)
};

export const _AccountSelector = {
  render: () => (
<<<<<<< HEAD
    // this div below is used to simulate the theme
    <div className={theme + " bg-primary w-full h-fit  p-6 flex flex-col"}>
      <p className="text-neutral"> {theme} </p>
      // this div below is used to simulate the theme
      <div className={theme + " bg-primary w-full h-fit  p-6 flex flex-col"}>
        <p className="text-neutral"> {theme} </p>
        <AccountSelectorButton {...args} />
      </div>
=======
    <div className={theme}>
      <AccountSelector {...args} />
>>>>>>> 4352c6d (added select account button + default theme variation)
    </div>
  ),
};
