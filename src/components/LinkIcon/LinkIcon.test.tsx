import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkIcon } from "./";

describe("Components | LinkIcon ", () => {
  test("it should render", () => {
    render(<LinkIcon>something</LinkIcon>);

    let element = screen.getByTestId("linkIcon");

    expect(element).toBeTruthy();
    expect(element.textContent).toBe("something");
  });

  test("it should render nested element", () => {
    const SomethingComponent = () => {
      return <p data-testid="nested">something in nested</p>;
    };
    render(
      <LinkIcon>
        <SomethingComponent />
      </LinkIcon>
    );

    let element = screen.getByTestId("linkIcon");
    let nested = screen.getByTestId("nested");

    expect(element).toBeTruthy();
    expect(element.textContent).toBe("something in nested");

    expect(nested).toBeTruthy();
    expect(nested.textContent).toBe("something in nested");
  });

  test("it should have primary class", () => {
    render(<LinkIcon>something</LinkIcon>);

    let element = screen.getByTestId("linkIcon");

    expect(element).toHaveClass("bg-primary");
  });

  test("it should fire onClick event", () => {
    const somethingClicked = jest.fn();

    render(<LinkIcon onClick={somethingClicked} />);

    let element = screen.getByTestId("linkIcon");

    fireEvent.click(element);
    expect(somethingClicked).toHaveBeenCalled();
  });
});
