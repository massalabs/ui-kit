import { DollarValue } from './DollarValue';

export default { title: 'Components/DollarValue', component: DollarValue };

export const _DollarValueWithDollars = {
  render: () => (
    <>
      <DollarValue dollarValue="14765.432" />
    </>
  ),
};

export const _DollarValueWithDollarsError = {
  render: () => (
    <>
      <DollarValue dollarValueError="Error retrieving dollar value" />
    </>
  ),
};
