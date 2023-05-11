import { Tab } from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
};

const args = {
  text: "Send",
};

export const _AccountSelector = {
  render: () => <Tab {...args} />,
};
