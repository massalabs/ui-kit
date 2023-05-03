import { render, screen, fireEvent } from "@testing-library/react";
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

  test("it should fire onClick event", () => {
    const somethingClicked = jest.fn();

    render(<LinkIcon onClick={somethingClicked} />);

    let element = screen.getByTestId("link-icon");

    fireEvent.click(element);
    expect(somethingClicked).toHaveBeenCalled();
  });
});
