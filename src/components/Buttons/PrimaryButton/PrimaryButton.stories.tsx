import { PrimaryButton } from "./PrimaryButton";

export default { title: "buttons", component: PrimaryButton };

const args = {
  onClick: () => {
    console.log("clicked");
  },
};

export const _PrimaryButton = {
  render: () => <PrimaryButton {...args}>My test</PrimaryButton>,
};
