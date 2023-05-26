import { Password } from './Password';

export default { title: 'Components/Password', component: Password };

export const _Password = {
  render: () => (
    <>
      <h3>Controlled components</h3>
      <Password placeholder={'with no content'} value="" />
      <br />
      <Password placeholder={'something'} value="with content" />
      <br />
      <Password
        placeholder={'something'}
        value=""
        error="that's an error without content"
      />
      <br />
      <Password
        placeholder={'something'}
        value="with content"
        error="that's an error with content"
      />
      <br />
      <Password
        placeholder={'something'}
        value=""
        warning="that's a warning without content"
      />
      <br />
      <Password
        placeholder={'something'}
        value="123"
        warning="that's a warning with content"
      />
      <br />

      <h3>Uncontrolled components</h3>
      <Password placeholder={'something'} defaultValue="" />
      <br />
      <Password
        placeholder={'something'}
        defaultValue=""
        error="that's an error with|without content"
      />
      <br />
      <Password
        placeholder={'something'}
        defaultValue=""
        warning="that's a warning with|without content"
      />
    </>
  ),
};
