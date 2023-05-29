import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Balance } from '.';

describe('Components | Balance', () => {
  test('it should render', () => {
    render(<Balance amount={'0123456.78'} equal={'000123456,78'} />);

    let balance = screen.getByTestId('balance');

    expect(balance).toBeInTheDocument();
  });
});
