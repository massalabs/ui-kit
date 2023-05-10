import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MassaLogo } from "./SvgComponent/MassaLogo";

describe("Components | Icons | SvgIcon", () => {
  it("renders with the correct background color", () => {
    render(<MassaLogo size={40} />);

    let icon = screen.getByTestId("svg-icon");

    expect(icon).toBeTruthy();
  });

  test("it should trigger onClick event", () => {
    const onClickMock = jest.fn();
    const args = {
      size: 40,
      onClick: onClickMock(),
    };

    render(<MassaLogo {...args} />);

    let icon = screen.getByTestId("svg-icon");
    fireEvent.click(icon);
    expect(onClickMock).toHaveBeenCalled();
  });
});
