import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
export default { title: "Components/Button", component: Button };

const primaryArgs = {
  onClick: () => {
    console.log("clicked");
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
};

export const _PrimaryDefault = {
  render: () => <Button {...primaryArgs}>Primary</Button>,
};

export const _PrimaryDisabled = {
  render: () => (
    <Button {...primaryArgs} disabled>
      Primary
    </Button>
  ),
};
