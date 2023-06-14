import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Clipboard } from './Clipboard';

describe('Components | Clipboard', () => {
  test('it should render', () => {
    render(
      <Clipboard
        displayedContent="formatted content"
        rawContent={'this is the content'}
        error="Oupps!"
        success="Copied!"
      />,
    );

    let input = screen.getByTestId('clipboard-field');

    expect(input).toBeInTheDocument();
  });
});
