import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Components | Button", () => {
  test("it should render primary button", () => {
    render(<Button variant="primary">something</Button>);

    let button = screen.getByTestId("primary-button");

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("something");
  });

  test("it should render secondary button", () => {
    render(<Button variant="secondary">something</Button>);

    let button = screen.getByTestId("secondary-button");

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("something");
  });

  test("it should render nested element", () => {
    const SomeComponent = () => {
      return <p data-testid="nested">something in nested</p>;
    };
    render(
      <Button variant="primary">
        <SomeComponent />
      </Button>
    );

    let button = screen.getByTestId("primary-button");
    let nested = screen.getByTestId("nested");

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("something in nested");

    expect(nested).toBeTruthy();
    expect(nested.textContent).toBe("something in nested");
  });

  test("it should have default primary class", () => {
    render(<Button variant="primary">something</Button>);

    let button = screen.getByTestId("primary-button");

    expect(button).toHaveClass("bg-neutral");
  });

  test("it should fire onClick event", () => {
    const somethingClicked = jest.fn();

    render(<Button onClick={somethingClicked} variant="primary" />);

    let button = screen.getByTestId("primary-button");

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();
  });
});
