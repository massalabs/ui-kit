import { Stepper } from './Stepper';

export default { title: 'Components/Stepper', component: Stepper };

export const _Stepper = {
  render: () => (
    <>
      Step 1/3
      <Stepper step={0} steps={['one', 'two', 'three']} />
      <br />
      Step 2/3
      <Stepper step={1} steps={['one', 'two', 'three']} />
      <br />
      Step 3/3
      <Stepper step={2} steps={['one', 'two', 'three']} />
      <br />
      Step 3/3 (with check completed)
      <Stepper step={3} steps={['one', 'two', 'three']} />
    </>
  ),
};
