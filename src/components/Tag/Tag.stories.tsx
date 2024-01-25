import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
};

export const _Tag = {
  render: () => (
    <>
      <Tag type={'default'}>default type</Tag>
      <br />
      <Tag type={'error'}>error type</Tag>
      <br />
      <Tag type={'success'}>success type</Tag>
      <br />
      <Tag type={'info'}>info type</Tag>
      <br />
      <Tag type={'warning'}>warning type</Tag>
    </>
  ),
};
