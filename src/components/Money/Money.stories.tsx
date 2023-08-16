import { Money } from './Money';

export default { title: 'Components/Money' };

export const _Money = {
  render: () => (
    <>
      <Money placeholder={'something'} />
      <Money variant="nMAS" placeholder={'something'} />
      <Money variant="nMAS" placeholder={'disabled'} disabled={true} />
    </>
  ),
};
