import { FiArrowUpRight } from 'react-icons/fi';
import { Description } from './Description';

export default {
  title: 'Components/Description',
};

const args = {
  preIcon: <FiArrowUpRight />,
  title: 'Website name',
  website: 'example.massa',
  description: 'Website’s description up to 120 characters',
  votes: 4,
  voted: 'VOTE' as 'VOTE' | 'UNVOTE',
  onVoteUp: () => console.log('up'),
  onVoteDown: () => console.log('down'),
};

export const _Primary = {
  render: () => <Description {...args} />,
};

export const _Secondary = {
  render: () => <Description variant="secondary" {...args} />,
};
