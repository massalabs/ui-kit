import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FiSun } from "react-icons/fi";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders the correct icon and calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Icon
        src={<FiSun />}
        color="#1AE19D"
        size="1em"
        onClick={onClickMock}
        className=""
      />
    );
    const iconElement = getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    fireEvent.click(iconElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
