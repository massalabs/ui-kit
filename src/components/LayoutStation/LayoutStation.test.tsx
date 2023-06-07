import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LayoutStation } from '.';

describe('Components | LayoutStation', () => {
  test('it should render', () => {
    render(<LayoutStation />);

    let sidePanel = screen.getByTestId('layout-station');

    expect(sidePanel).toBeInTheDocument();
  });
});
