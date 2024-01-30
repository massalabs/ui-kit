import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FetchingLine, FetchingRound, FetchingStatus } from './Fetching';

describe('Components | Fetching | Fetching Round', () => {
  test('it should render', () => {
    render(<FetchingRound />);

    let fetchingRound = screen.getByTestId('fetching-round');

    expect(fetchingRound).toBeInTheDocument();
  });
});

describe('Components | Fetching | Fetching Line', () => {
  test('it should render', () => {
    render(<FetchingLine />);

    let fetchingLine = screen.getByTestId('fetching-line');

    expect(fetchingLine).toBeInTheDocument();
  });
});

describe('Components | Fetching | Fetching Status', () => {
  test('it should render', () => {
    render(
      <FetchingStatus>
        {' '}
        <p>foo</p>
      </FetchingStatus>,
    );

    let fetchingStatus = screen.getByTestId('fetching-status');

    expect(fetchingStatus).toBeInTheDocument();
  });
});
