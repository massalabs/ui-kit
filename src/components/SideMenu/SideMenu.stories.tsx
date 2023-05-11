import React from "react";
import { SideMenu } from "./SideMenu";
import { MenuLink } from "../Buttons/LinkIcon";
import { CrossTriangle } from "../Icons/Svg/SvgComponent";
export default { title: "sideMenu", component: SideMenu };

const menuLinkIcons = [
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Home</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Transactions</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Send/Receive</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Assets</p>
  </MenuLink>,
];

const menuLinkIconsBottom = [
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Settings</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={20} />} color={"#1AE19D"}>
    <p>Help</p>
  </MenuLink>,
];

export const _SideMenu = {
  render: () => (
    <SideMenu
      title={"sideMenu"}
      listLinksTop={menuLinkIcons}
      listLinksBottom={menuLinkIconsBottom}
    />
  ),
};
