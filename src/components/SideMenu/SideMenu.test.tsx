import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SideMenu } from "./SideMenu";

describe("Components | Fields | Password", () => {
  test("it should render", () => {
    render(<SideMenu />);
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
