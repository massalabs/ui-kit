import { Input } from "./Input";

export default { title: "Components/Input", component: Input };

export const _Input = {
  render: () => (
    <>
      <Input placeholder={"something"} />
      <br />

      <Input placeholder={"something"} error="that's an error" />
      <br />

      <Input placeholder={"something"} warning="that's a warning" />
    </>
  ),
};
