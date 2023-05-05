import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from ".";

describe("Components | Fields | Input", () => {
  test("it should render", () => {
    render(<Input />);

    let input = screen.getByTestId("input-field");

    expect(input).toBeInTheDocument();
  });

  test("it should set a new placeholder content", () => {
    render(<Input placeholder={"something"} />);

    let input = screen.getByPlaceholderText("something");

    expect(input).toBeInTheDocument();
  });

  test("it should show an error message", () => {
    render(<Input error={"euh"} />);

    let message = screen.getByTestId("input-field-message");
    let input = screen.getByTestId("input-field");

    expect(message).toBeInTheDocument();
    expect(message.getAttribute("class")).toContain("text-s-error");
    expect(input.getAttribute("class")).toContain("border-s-error");
  });

  test("it should show an warning message", () => {
    render(<Input warning={"warn"} />);

    let message = screen.getByTestId("input-field-message");
    let input = screen.getByTestId("input-field");

    expect(message).toBeInTheDocument();
    expect(message.getAttribute("class")).toContain("text-s-warning");
    expect(input.getAttribute("class")).toContain("border-s-warning");
  });

  test("it should change border color on focusIn", () => {
    render(<Input />);

    let input = screen.getByTestId("input-field");

    fireEvent.focus(input);

    expect(input.getAttribute("class")).toContain("default-input");
  });
});
