import { render, fireEvent, screen } from "@testing-library/react";
import { AccountSelectorButton } from "./AccountSelector";
import { FiUser, FiAlertTriangle } from "react-icons/fi";

describe("Components | Buttons | Account Selector", () => {
  test("it should render", () => {
    const args = {
      avatar: <FiUser className="text-neutral" />,
      accountName: "account #",
      icon: <FiAlertTriangle />,
      amount: "0,000.00",
    };
    render(<AccountSelectorButton {...args} />);

    let accountSelector = screen.getByTestId("account-selector-button");

    expect(accountSelector).toBeTruthy();
  });

  test("it fire the onClick fn", () => {
    const onClickMock = jest.fn();
    const args = {
      avatar: <FiUser className="text-neutral" />,
      accountName: "account #",
      icon: <FiAlertTriangle />,
      amount: "0,000.00",
    };
    render(<AccountSelectorButton onClick={onClickMock} {...args} />);

    let accountSelector = screen.getByTestId("account-selector-button");

    fireEvent.click(accountSelector);
    expect(onClickMock).toHaveBeenCalled();
    expect(accountSelector).toBeTruthy();
  });
});
