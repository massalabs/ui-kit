import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InlineMoney } from '.';

describe('Components | Fields | InlineMoney', () => {
  test('it should render', () => {
    render(<InlineMoney value="value" />);

    let inlineMoney = screen.getByTestId('inline-money');

    expect(inlineMoney).toBeInTheDocument();
  });
});
