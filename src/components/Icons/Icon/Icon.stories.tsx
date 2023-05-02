import { FiSun } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Icon } from "./Icon";
// https://react-icons.github.io/react-icons/icons?name=fi
// https://github.com/react-icons/react-icons

export default { title: "Icons", component: Icon };

const args = {
  src: <FiSun />,
  color: "#1AE19D",
  size: "1em",
};

// to render it as a generic Icon component
export const _Icon = {
  render: () => <Icon {...args} />,
};

// to render it directly without any wrapping component
export const _Sun = {
  render: () => (
    <IconContext.Provider
      value={{
        color: "red",
        className: "",
        size: "1em",
      }}
    >
      <FiSun onClick={() => console.log("click")} />
    </IconContext.Provider>
  ),
};
