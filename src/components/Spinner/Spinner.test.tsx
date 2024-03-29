import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Components | Spinner', () => {
  test('it should render', () => {
    render(<Spinner />);

    let spinner = screen.getByTestId('spinner');

    expect(spinner).toBeTruthy();
  });
});
