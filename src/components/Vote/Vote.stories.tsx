import { Vote } from './Vote';

export default {
  title: 'Components/Vote',
};

const args = {
  votes: 4,
  onVote: () => console.log('onVote'),
};

export const _Vote = {
  render: () => (
    <>
      <Vote {...args} />
      <br />

      <Vote {...args} voted="VOTE" />
      <br />

      <Vote {...args} voted="UNVOTE" />
    </>
  ),
};
