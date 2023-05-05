import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

export default { title: "Components/Button", component: Button };

const args = {
  onClick: () => {
    console.log("clicked");
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
};

export const _Primary = {
  render: () => (
    <>
      <Button {...args}>Primary</Button>

      <br />
      <br />

      <Button {...args} disabled>
        Primary disabled
      </Button>
    </>
  ),
};

export const _Secondary = {
  render: () => (
    <>
      <Button variant="secondary" {...args}>
        Seconday
      </Button>

      <br />
      <br />

      <Button variant="secondary" {...args} disabled>
        Seconday disabled
      </Button>
    </>
  ),
};
