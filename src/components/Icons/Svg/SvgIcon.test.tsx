import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { SvgIcon } from "./SvgIcon";
import { MassaLogo } from "../../../assets/svg-components/MassaLogo";

describe("Components | Icons | SvgIcon", () => {
  it("renders with the correct background color", () => {
    const args = {
      svg: <MassaLogo />,
    };
    render(<SvgIcon {...args} />);

    let icon = screen.getByTestId("svg-icon-component");

    expect(icon).toBeTruthy();
  });

  test("it fire the onClick fn", () => {
    const onClickMock = jest.fn();
    const args = {
      svg: <MassaLogo />,
      onClick: onClickMock(),
    };

    render(<SvgIcon {...args} />);

    let icon = screen.getByTestId("svg-icon-component");
    fireEvent.click(icon);
    expect(onClickMock).toHaveBeenCalled();
  });
});
