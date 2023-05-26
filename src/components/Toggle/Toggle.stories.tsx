import { Toggle } from './Toggle';

export default { title: 'Components/Toggle', component: Toggle };

export const _Toggle = {
  render: () => (
    <>
      <Toggle size="sm" value="1" onClick={() => console.log('clicked')} />
      <br />
      <Toggle value="1" />
      <br />
      <Toggle size="lg" value="1" />
      <br />
      <Toggle value="1" disabled />
    </>
  ),
};
