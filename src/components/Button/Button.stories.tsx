import { Button } from "./Button";
import Ico from "../../assets/ico-amount-light.svg";

export default { title: "Components/Button", component: Button };

const args = {
  onClick: () => {
    console.log("clicked");
  },
  iconStart: Ico,
  iconEnd: Ico,
};

export const _PrimaryDefault = {
  render: () => <Button {...args}>Button 1</Button>,
};

export const _PrimaryDisabled = {
  render: () => (
    <Button {...args} disabled>
      Button 1
    </Button>
  ),
};
