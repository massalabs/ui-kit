import { Balance } from './Balance';

export default { title: 'Components/Balance', component: Balance };

export const _Balance = {
  render: () => (
    <>
      <Balance amount={'12.345.67'} equal={'0012345,67'} />

      <br />

      <Balance amount={'12.345.67'} />

      <br />

      <Balance size="md" amount={'12.345.67'} />

      <br />

      <Balance size="xs" amount={'12.345.67'} />
    </>
  ),
};
