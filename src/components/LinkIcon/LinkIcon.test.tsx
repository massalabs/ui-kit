import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkIcon } from "./";

describe("Components | LinkIcon ", () => {
  test("it should render", () => {
    render(<LinkIcon>something</LinkIcon>);

    let element = screen.getByTestId("link-icon");

    expect(element).toBeTruthy();
    expect(element.textContent).toBe("something");
  });

  test("it should have mas-menu-default class", () => {
    render(<LinkIcon>something</LinkIcon>);

    let element = screen.getByTestId("link-icon");

    expect(element).toHaveClass("mas-menu-default");
  });
});
