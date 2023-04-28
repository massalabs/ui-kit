import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EyeOff } from "../../../assets/svg/icons/EyeOff";
import { Icon } from "./Icon";

const testSrc = (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6"
    />
  </svg>
);

describe("Components | Icons | Icon", () => {
  test("it should render", () => {
    render(<Icon src={<EyeOff stroke="#1AE19D" />} />);

    let icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  test("it should display the provided image", () => {
    render(<Icon src={testSrc} />);
    let icon = screen.getByTestId("icon");
    expect(icon.firstChild).toBeInstanceOf(SVGElement); // Casts the React element to an SVG element for testing
  });

  test("it should handle additional props", () => {
    render(
      <Icon src={testSrc} className="test-class" style={{ color: "red" }} />
    );

    let icon = screen.getByTestId("icon");

    expect(icon).toHaveClass("test-class");
    expect(icon).toHaveStyle("color: red");
  });

  test("it should handle event handlers", () => {
    const onClick = jest.fn();

    render(<Icon src={testSrc} onClick={onClick} />);

    let icon = screen.getByTestId("icon");

    fireEvent.click(icon);

    expect(onClick).toHaveBeenCalled();
  });
});
