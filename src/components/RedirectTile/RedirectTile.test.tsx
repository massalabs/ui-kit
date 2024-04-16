import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RedirectTile } from './RedirectTile';

describe('Components | RedirectTile', () => {
  test('it should render', () => {
    render(
      <RedirectTile
        title="this is a title"
        url="foo bar"
        description="RedirectTile description"
        size="md"
      />,
    );

    let input = screen.getByTestId('RedirectTile');

    expect(input).toBeInTheDocument();
  });
});
