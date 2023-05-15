import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuLink } from ".";

describe("Components | MenuLink ", () => {
  test("it should render", () => {
    render(<MenuLink>something</MenuLink>);

    let element = screen.getByTestId("link-icon");

    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("something");
  });

  test("it should fires an onClic action", () => {
    const somethingClicked = jest.fn();

    render(<MenuLink onClick={somethingClicked}>something</MenuLink>);
    
    let element = screen.getByTestId("link-icon");

    fireEvent.click(element);
    expect(somethingClicked).toBeCalled;
  });
});
