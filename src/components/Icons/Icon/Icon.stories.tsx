import { Icon } from "./Icon";
// import { Lock } from "../../../assets/svg/icons/Lock"
// import { Sun } from "../../../assets/svg/icons/Sun"
// import { Settings } from "../../../assets/svg/icons/Settings"
import { EyeOff } from "../../../assets/svg/icons/EyeOff";

export default { title: "Icons", component: Icon };

// Color hex code to be passed as a prop to the svg component
const massaGreen = "#1AE19D";
// const massaBlack = "#151A26"

const args = {
  // light: "true",
  src: <EyeOff stroke={massaGreen} />,
};

export const _Icon = {
  render: () => <Icon {...args} />,
};
