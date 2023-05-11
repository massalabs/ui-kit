import { render, fireEvent, screen } from "@testing-library/react";
import { Tab } from "./Tab";

describe("Components | Tab | Tab", () => {
  test("it should render", () => {
    const args = {
      leftTabText: "Send",
      rightTabText: "Receive",
    };
    render(<Tab {...args} />);

    let tabSelector = screen.getByTestId("tab-selector");

    expect(tabSelector).toBeTruthy();
  });

  test("it fire the onClick fn", () => {
    const onClickMock = jest.fn();
    const args = {
      leftTabText: "Send",
      rightTabText: "Receive",
    };
    render(<Tab onClick={onClickMock} {...args} />);

    let tabSelector = screen.getByTestId("tab-selector");

    fireEvent.click(tabSelector);
    expect(onClickMock).toHaveBeenCalled();
    expect(tabSelector).toBeTruthy();
  });
});
