import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MassaLogo } from "../../../assets/svg-components/MassaLogo";

describe("Components | Icons | SvgIcon", () => {
  it("renders with the correct background color", () => {
    const args = {
      size: 40,
    };
    render(<MassaLogo {...args} />);

    let icon = screen.getByTestId("svg-icon-component");

    expect(icon).toBeTruthy();
  });

  test("it should trigger onClick event", () => {
    const onClickMock = jest.fn();
    const args = {
      size: 40,
      onClick: onClickMock(),
    };

    render(<MassaLogo {...args} />);

    let icon = screen.getByTestId("svg-icon-component");
    fireEvent.click(icon);
    expect(onClickMock).toHaveBeenCalled();
  });
});
