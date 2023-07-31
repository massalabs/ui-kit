import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '.';

describe('Components | Toggle', () => {
  test('it should render', () => {
    render(<Tooltip content={'Hello I am tooltip content'} />);

    let tooltip = screen.getByTestId('Tooltip');

    expect(tooltip).toBeInTheDocument();
  });
});
