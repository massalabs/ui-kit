import { StoryFn } from "@storybook/react";
import { PrimaryButton, PrimaryButtonProps } from "./";

export default {
  component: PrimaryButton,
  title: "Components/PrimaryButton",
};

const Template: StoryFn<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args}>Click me</PrimaryButton>
);

export const DefaultPrimaryButton = Template.bind({});

const TemplateHover: StoryFn<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args}>My test</PrimaryButton>
);

export const HoverPrimaryButton = TemplateHover.bind({});