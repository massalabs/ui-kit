import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DollarValue } from '.';

describe('Components | DollarValue', () => {
  test('it should render', () => {
    render(<DollarValue dollarValueError="Error retrieving dollar value" />);

    let dollarValue = screen.getByTestId('dollar-value');

    expect(dollarValue).toBeInTheDocument();
  });

  test('it should render success', () => {
    render(<DollarValue dollarValue="14765.432" />);

    let dollarValue = screen.getByTestId('dollar-value');

    expect(dollarValue).toBeInTheDocument();
  });
});
