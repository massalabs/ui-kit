import { Toggle } from './Toggle';

export default { title: 'Components/Toggle', component: Toggle };

export const _Toggle = {
  render: () => (
    <>
      <Toggle tShirtSize="sm" onClick={() => console.log('clicked')} />
      <br />
      <Toggle />
      <br />
      <Toggle tShirtSize="lg" />
      <br />
      <Toggle disabled />
    </>
  ),
};
