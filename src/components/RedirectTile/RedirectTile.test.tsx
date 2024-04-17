import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RedirectTile } from './RedirectTile';

describe('Components | RedirectTile', () => {
  test('it should render', () => {
    render(
      <RedirectTile url="foo bar" size="md">
        <h1>Header 1</h1>
        <p>Paragraph</p>
      </RedirectTile>,
    );

    let input = screen.getByTestId('RedirectTile');

    expect(input).toBeInTheDocument();
  });
});
