import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '.';

describe('Components | Toggle', () => {
  test('it should render', () => {
    render(<Tooltip />);

    let tooltip = screen.getByTestId('Tooltip');

    expect(tooltip).toBeInTheDocument();
  });
});
