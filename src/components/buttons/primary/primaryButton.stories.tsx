import { StoryFn } from "@storybook/react";
import { PrimaryButton, PrimaryButtonProps } from "./";

export default {
  component: PrimaryButton,
  title: "Components/PrimaryButton",
};

const Template: StoryFn<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args} />
);

export const DefaultPrimaryButton = Template.bind({});
DefaultPrimaryButton.args = {
  text: "Click Me!",
};
