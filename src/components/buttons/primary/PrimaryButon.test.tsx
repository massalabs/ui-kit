import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import { PrimaryButton } from "./";

afterEach(cleanup);

describe("Primary button", () => {
  it("should render a button", () => {
    const text = `button text`;
    const onclick = jest.fn();
    const button = <PrimaryButton onCLick={onclick}>{text}</PrimaryButton>;

    // snapshot test
    const componentSnapchat = renderer.create(button);
    const tree = componentSnapchat.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
