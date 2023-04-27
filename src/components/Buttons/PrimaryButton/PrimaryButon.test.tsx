import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "./";

describe("Components | Buttons | PrimaryButton", () => {
  test("it should render", () => {
    render(<PrimaryButton>something</PrimaryButton>);

    let button = screen.getByTestId("primary-button");

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("something");
  });

  test("it should render nested element", () => {
    const SomethingComponent = () => {
      return <p data-testid="nested">something in nested</p>;
    };
    render(
      <PrimaryButton>
        <SomethingComponent />
      </PrimaryButton>
    );

    let button = screen.getByTestId("primary-button");
    let nested = screen.getByTestId("nested");

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("something in nested");

    expect(nested).toBeTruthy();
    expect(nested.textContent).toBe("something in nested");
  });

  test("it should have primary class", () => {
    render(<PrimaryButton>something</PrimaryButton>);

    let button = screen.getByTestId("primary-button");

    expect(button).toHaveClass("bg-primary");
  });

  test("it should fire onClick event", () => {
    const somethingClicked = jest.fn();

    render(<PrimaryButton onClick={somethingClicked} />);

    let button = screen.getByTestId("primary-button");

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();
  });
});
