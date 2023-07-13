import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
};

const arg1 = {
  tagType: 'success',
  text: 'account #',
};

const arg2 = {
  tagType: 'error',
  text: 'account #',
};
const arg3 = {
  tagType: 'info',
  text: 'account #',
};

export const _TagSuccess = {
  render: () => <Tag {...arg1} />,
};
export const _TagError = {
  render: () => <Tag {...arg2} />,
};
export const _TagInfo = {
  render: () => <Tag {...arg3} />,
};
