import { InlineMoney } from './InlineMoney';

export default { title: 'Components/InlineMoney' };

export const _InlineMoney = {
  render: () => (
    <p>
      <InlineMoney value="1000000" />
      <br />
      <InlineMoney value="0.00" disabled />
      <br />
      <InlineMoney value="5.55" suffix=" USD" />
      <br />
      <InlineMoney value="5.55" customClass="mas-caption" />
    </p>
  ),
};
