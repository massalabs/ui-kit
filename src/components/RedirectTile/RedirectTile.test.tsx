import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RedirectTile } from './RedirectTile';

describe('Components | RedirectTile', () => {
  test('it should render', () => {
    render(
      <RedirectTile
        header={
          <div>
            <img
              width={40}
              height={40}
              className="rounded-full"
              src="https://placehold.jp/150x150.png"
            />
            <h1>Massa Bridge</h1>
          </div>
        }
        body={<p>Bridge tokens between Ethereum and Massa Chains.</p>}
        url="foo bar"
        size="md"
      />,
    );

    let input = screen.getByTestId('RedirectTile');

    expect(input).toBeInTheDocument();
  });
});
