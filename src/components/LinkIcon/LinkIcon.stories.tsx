import { LinkIcon } from "./LinkIcon";
import { BiHomeAlt } from "react-icons/bi";

export default { title: "buttons", component: LinkIcon };

const args = {
  onClick: () => {
    console.log("clicked");
  },
};

export const _LinkIcon = {
  render: () => <LinkIcon {...args}>My test</LinkIcon>,
};
export const _LinkIconWithIcon = {
  render: () => (
    <LinkIcon {...args} icon={BiHomeAlt}>
      My test
    </LinkIcon>
  ),
};
export const _LinkIconWithIconTertiaryColor = {
  render: () => (
    <LinkIcon {...args} icon={BiHomeAlt} color="tertiary">
      My test
    </LinkIcon>
  ),
};
