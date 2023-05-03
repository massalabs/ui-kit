import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
export default { title: "Components/Button", component: Button };

const args = {
  onClick: () => {
    console.log("clicked");
  },
  iconStart: <FiArrowUpRight />,
  iconEnd: <FiArrowUpRight />,
};

export const _PrimaryDefault = {
  render: () => <Button {...args}>Primary</Button>,
};

export const _PrimaryDisabled = {
  render: () => (
    <Button {...args} disabled>
      Primary
    </Button>
  ),
};
