import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
};

export const _Tag = {
  render: () => (
    <>
      <Tag type={'error'} content={'error type'} />
      <br />
      <Tag type={'success'} content={'success type'} />
      <br />
      <Tag type={'info'} content={'info type'} />
      <br />
      <Tag type={'warning'} content={'warning type'} />
    </>
  ),
};
