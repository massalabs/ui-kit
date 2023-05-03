import { LinkIcon } from "./LinkIcon";
import { BiHomeAlt } from "react-icons/bi";

export default { title: "buttons", component: LinkIcon };

export const _LinkIcon = {
  render: () => <LinkIcon>My test</LinkIcon>,
};
export const _LinkIconWithIcon = {
  render: () => <LinkIcon icon={<BiHomeAlt />}>My test</LinkIcon>,
};
export const _LinkIconWithIconBrandColor = {
  render: () => (
    <LinkIcon icon={<BiHomeAlt className="text-brand" />}>My test</LinkIcon>
  ),
};
