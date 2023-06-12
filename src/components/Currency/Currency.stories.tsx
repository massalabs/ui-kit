import { Currency } from './Currency';

export default { title: 'Components/Currency' };

export const _Currency = {
  render: () => (
    <>
      <h3>Controlled components</h3>
      <Currency placeholder={'with no content'} value="" />
      <br />
      <Currency placeholder={'something'} value="123.00" />
      <br />
      <Currency
        placeholder={'something'}
        value=""
        error="that's an error without content"
      />
      <br />
      <Currency
        placeholder={'something'}
        value="123.00"
        error="that's an error with content"
      />
      <br />
      <Currency
        placeholder={'something'}
        value=""
        warning="that's a warning without content"
      />
      <br />
      <Currency
        placeholder={'something'}
        value="123.00"
        warning="that's a warning with content"
      />
      <br />

      <h3>Uncontrolled components</h3>
      <Currency placeholder={'something'} defaultValue="" />
      <br />
      <Currency
        placeholder={'something'}
        defaultValue=""
        error="that's an error with|without content"
      />
      <br />
      <Currency
        placeholder={'something'}
        defaultValue=""
        warning="that's a warning with|without content"
      />
    </>
  ),
};
