import { Password } from "./Password";

export default { title: "Components/Password", component: Password };

export const _Password = {
  render: () => (
    <>
      <Password placeholder={"something"} />
      <br />

      <Password placeholder={"something"} error="that's an error" />
      <br />

      <Password placeholder={"something"} warning="that's a warning" />
    </>
  ),
};
