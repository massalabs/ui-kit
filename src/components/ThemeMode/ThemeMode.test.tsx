import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeMode } from './ThemeMode';

describe('Components | Button | ThemeMode', () => {
  test('it should render', () => {
    render(<ThemeMode />);

    let button = screen.getByTestId('theme-mode');

    expect(button).toBeInTheDocument();
  });
});
