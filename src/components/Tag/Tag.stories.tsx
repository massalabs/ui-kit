import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
};

const argSuccess = {
  tagType: 'success',
  text: 'account #',
};

const argError = {
  tagType: 'error',
  text: 'account #',
};
const argInfo = {
  tagType: 'info',
  text: 'account #',
};

export const _TagSuccess = {
  render: () => <Tag {...argSuccess} />,
};
export const _TagError = {
  render: () => <Tag {...argError} />,
};
export const _TagInfo = {
  render: () => <Tag {...argInfo} />,
};
