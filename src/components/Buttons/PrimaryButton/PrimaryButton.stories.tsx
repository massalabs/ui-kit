import { StoryFn } from "@storybook/react";
import { PrimaryButton, PrimaryButtonProps } from ".";

export default {
  component: PrimaryButton,
  title: "Components/PrimaryButton",
};

const Template: StoryFn<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args}>Click me</PrimaryButton>
);

export const DefaultPrimaryButton = Template.bind({});
DefaultPrimaryButton.args = {
  onClick: () => {
    console.log("clicked");
  },
};

const TemplateHover: StoryFn<PrimaryButtonProps> = (args) => (
  <>
    <PrimaryButton {...args}>My test</PrimaryButton>
    <h1 className="mas-banner">My title</h1>
    <p className="mas-menu-underline">MenuUnderline?</p>
    <p className="mas-caption">Caption?</p>
    <p className="mas-body">body?</p>
    <p className="mas-body2">body2</p>
  </>
);

export const HoverPrimaryButton = TemplateHover.bind({});
