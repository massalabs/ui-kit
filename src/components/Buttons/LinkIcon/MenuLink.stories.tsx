import { MenuLink } from "./MenuLink";
import { BiHomeAlt } from "react-icons/bi";

export default { title: "buttons", component: MenuLink };

export const _MenuLink = {
  render: () => <MenuLink>My test</MenuLink>,
};
export const _MenuLinkWithIcon = {
  render: () => <MenuLink icon={<BiHomeAlt />}>My test</MenuLink>,
};
export const _MenuLinkWithIconBrandColor = {
  render: () => (
    <MenuLink icon={<BiHomeAlt className="text-brand" />}>My test</MenuLink>
  ),
};
