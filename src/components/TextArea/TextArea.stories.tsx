import { TextArea } from './TextArea';

export default { title: 'Components/TextArea' };

export const _TextArea = {
  render: () => (
    <div className="bg-secondary text-f-primary p-4">
      <TextArea placeholder={'With no content'}></TextArea>
      <br />
      <TextArea placeholder={'With content'}>With content</TextArea>
      <br />
      <TextArea
        placeholder={'With no content'}
        error="That's an error without content"
      />
      <br />
      <TextArea
        placeholder={'With content'}
        error="That's an error without content"
      >
        something
      </TextArea>
      <br />
      <TextArea
        placeholder={'something'}
        warning="that's a warning without content"
      ></TextArea>
      <br />
      <TextArea
        placeholder={'something'}
        warning="that's a warning with content"
      >
        Something
      </TextArea>
    </div>
  ),
};
