import { InlineInput } from './InlineInput';

export default { title: 'Components/InlineInput' };

export const _InlineInput = {
  render: () => (
    <p>
      <InlineInput value="1000000" />
      <br />
      <InlineInput value="0.00" disabled />
      <br />
      <InlineInput value="5.55" suffix=" USD" />
      <br />
      <InlineInput value="5.55" customClass="mas-caption" />
    </p>
  ),
};
