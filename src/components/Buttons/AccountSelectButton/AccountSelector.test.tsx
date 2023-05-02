import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccountSelectorButton } from "./AccountSelectorButton";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { FiUser } from "react-icons/fi";

describe("Components | Buttons | PrimaryButton", () => {
  test("it should render", () => {
    const theme = "theme-light";
    const args = {
      profileImage: <FiUser className="text-neutral" />,
      accountName: "account #",
      massaToken: <MassaToken theme={theme} />,
      accountBalance: "0,000.00",
    };
    render(<AccountSelectorButton {...args} />);

    let button = screen.getByTestId("account-selector-button");

    expect(button).toBeTruthy();
  });
});
