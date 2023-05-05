import { FiUser } from "react-icons/fi";
<<<<<<< HEAD
<<<<<<< HEAD
import { FiClock } from "react-icons/fi";
// import { MassaToken } from "../../../assets/svg-components/MassaToken";
=======
import { MassaToken } from "../../../assets/svg-components/MassaToken";
>>>>>>> d005003 (add svg massa token)
import { AccountSelectorButton } from "./AccountSelectorButton";

export default {
  title: "Components/Account Selector",
  component: AccountSelectorButton,
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d005003 (add svg massa token)

const theme = "theme-light";

// args passsed trough the account selector button
const args = {
  profileimage: <FiUser className="text-neutral h-6 w-6" />,
  accountname: "account #",
  svg: <MassaToken size={24} />,
  accountbalance: "0,000.00",
=======
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { AccountSelector } from "./AccountSelector";

export default { title: "buttons", component: AccountSelector };
=======
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)

const theme = "theme-light";

// args passsed trough the account selector button
const args = {
<<<<<<< HEAD
  profileImage: <FiUser className="text-neutral" />,
  accountName: "account #",
  massaToken: <MassaToken theme={theme} />,
  accountBalance: "0,000.00",
>>>>>>> 4352c6d (added select account button + default theme variation)
=======
  profileimage: <FiUser className="text-neutral h-6 w-6" />,
  accountname: "account #",
<<<<<<< HEAD
  // theme for token to be passed as props to the svg component which is located
  // You have to pass theme in order to set corrent masstoken bg
  massatoken: <MassaToken theme={theme} />,
=======
  // theme for token has to be passed as props to the svg component which is located
  // You have to pass theme in order to set corrent masstoken bg
  massatoken: <MassaToken />,
>>>>>>> a46d67c (fixed masstoken svg bg color)
  accountbalance: "0,000.00",
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)
};

export const _AccountSelector = {
  render: () => (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    // this div below is used to simulate the theme
=======
>>>>>>> d005003 (add svg massa token)
    <div className={theme + " bg-primary w-full h-fit  p-6 flex flex-col"}>
      <p className="text-neutral"> {theme} </p>
      <AccountSelectorButton {...args} />
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)
    </div>
  ),
};
