import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
export default { title: "Components/Button", component: Button };

const primaryArgs = {
  onClick: () => {
    console.log("clicked");
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
  variant: "primary",
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

const secondaryArgs = {
  onClick: () => {
    console.log("clicked");
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
  variant: "secondary",
};

export const _SecondaryDefault = {
  render: () => <Button {...secondaryArgs}>Secondary</Button>,
};

export const _SecondaryDisabled = {
  render: () => (
    <Button {...secondaryArgs} disabled>
      Secondary
    </Button>
  ),
};
