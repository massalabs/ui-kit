import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FiSun } from "react-icons/fi";

describe("Icon", () => {
  it("should render the correct icon", () => {
    const { getByTestId } = render(
      <div>
        <FiSun data-testid="fi-sun" />
      </div>
    );
    const iconElement = getByTestId("fi-sun");
    expect(iconElement).toBeInTheDocument();
  });

  it("shoudl call onClick function when clicked", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      <div>
        <FiSun onClick={onClickMock} data-testid="fi-sun" />
      </div>
    );
    const iconElement = getByTestId("fi-sun");

    fireEvent.click(iconElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
