import { Input } from './Input';

export default { title: 'Components/Input' };
import { FiUsers } from 'react-icons/fi';

export const _RegularInput = {
  render: () => (
    <>
      <h3>Controlled components</h3>
      <Input placeholder={'with no content'} value="" />
      <br />
      <Input placeholder={'something'} value="with content" />
      <br />
      <Input
        placeholder={'something'}
        value=""
        error="that's an error without content"
      />
      <br />
      <Input
        placeholder={'something'}
        value="with content"
        error="that's an error with content"
      />
      <br />
      <Input
        placeholder={'something'}
        value=""
        warning="that's a warning without content"
      />
      <br />
      <Input
        placeholder={'something'}
        value="123"
        warning="that's a warning with content"
      />
      <br />

      <h3>Uncontrolled components</h3>
      <Input placeholder={'something'} defaultValue="" />
      <br />
      <Input
        placeholder={'something'}
        defaultValue=""
        error="that's an error with|without content"
      />
      <br />
      <Input
        placeholder={'something'}
        defaultValue=""
        warning="that's a warning with|without content"
      />
    </>
  ),
};

export const _IconInput = {
  render: () => (
    <>
      <Input placeholder={'something'} icon={<FiUsers />} defaultValue="" />
      <br />
      <Input
        placeholder={'something'}
        defaultValue=""
        icon={<FiUsers />}
        onClickIcon={() => console.log('clicked')}
        customClass="border-0"
        success="Woow!"
      />
    </>
  ),
};
