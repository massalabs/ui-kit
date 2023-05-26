import { Tabs } from './Tabs';
import { Button } from '../Button';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const tabsConfig = [
  {
    label: 'Tab 1',
    content: <Button> Tab 1 component </Button>,
    onClickTab: () => console.log('Hello'),
  },
  {
    label: 'Tab 2',
    content: <Button> Tab 2 component </Button>,
  },
];

const args = {
  tabsConfig,
  defaultIndex: 1,
};

export const _Tabs = {
  render: () => <Tabs {...args} />,
};
