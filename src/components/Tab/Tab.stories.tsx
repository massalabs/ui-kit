import { Tab } from "./Tab";

export default {
  title: "Components / Tab",
  component: Tab,
};

const args = {
  leftTabText: "Send",
  rightTabText: "Receive",
};

export const _Tabs = {
  render: () => (
    <div className="w-full flex flew-row">
      <Tab {...args}> </Tab>
    </div>
  ),
};
