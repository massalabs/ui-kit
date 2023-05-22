import { SideMenu } from "./SideMenu";
import { MenuLink } from "../Buttons/MenuLink";
import { CrossTriangle } from "../Icons/Svg/Massa/CrossTriangle";
export default { title: "Components/SideMenu", component: SideMenu };

const menuLinkIcons = [
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"1"}>
    <p>Home</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"2"}>
    <p>Transactions</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"3"}>
    <p>Send/Receive</p>
  </MenuLink>,
  <MenuLink
    icon={<CrossTriangle size={30} />}
    color={"#1AE19D"}
    key={"4"}
    isActive={true}
  >
    <p>Assets</p>
  </MenuLink>,
];

const menuLinkIconsBottom = [
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"1"}>
    <p>Settings</p>
  </MenuLink>,
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"2"}>
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
