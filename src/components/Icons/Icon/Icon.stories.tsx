import { FiSun } from "react-icons/fi";
// https://react-icons.github.io/react-icons/icons?name=fi
// https://github.com/react-icons/react-icons

import { Icon } from "./Icon";

export default { title: "Icons", component: Icon };

const args = {
  src: <FiSun />,
  color: "#1AE19D",
  className: "",
  size: "1em",
  onClick: () => console.log("Icon clicked"),
};

export const _Icon = {
  render: () => <Icon {...args} />,
};
