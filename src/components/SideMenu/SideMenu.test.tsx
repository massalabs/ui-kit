import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SideMenu } from "./SideMenu";
import { MenuLink } from "../Buttons/MenuLink";
import { CrossTriangle } from "../Icons/Svg/Massa";

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
  <MenuLink icon={<CrossTriangle size={30} />} color={"#1AE19D"} key={"4"}>
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

describe("Components | SideMenu", () => {
  test("it should render", () => {
    render(
      <SideMenu
        title={"sideMenu"}
        listLinksTop={menuLinkIcons}
        listLinksBottom={menuLinkIconsBottom}
      />
    );
    let input = screen.getByTestId("side-menu");
    expect(input).toBeTruthy();
  });
  // test("it should set a new placeholder content", () => {
  //   render(<SideMenu placeholder={"something"} />);
  //   let input = screen.getByPlaceholderText("something");
  //   expect(input).toBeTruthy();
  // });
  // test("it should show/hide the input content when switching between eye mode", () => {
  //   render(<SideMenu placeholder={"something"} />);
  //   let iconClose = screen.getByTestId("icon-close");
  //   let input = screen.getByTestId("password-input");
  //   expect(iconClose).toBeInTheDocument();
  //   expect(input).toHaveAttribute("type", "password");
  //   fireEvent.click(iconClose);
  //   let iconOpen = screen.getByTestId("icon-open");
  //   expect(iconOpen).toBeInTheDocument();
  //   expect(input).toHaveAttribute("type", "text");
  // });
});
