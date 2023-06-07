import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SidePanel } from '.';

describe('Components | SidePanel', () => {
  test('it should render', () => {
    render(<SidePanel />);

    let sidePanel = screen.getByTestId('side-panel');

    expect(sidePanel).toBeInTheDocument();
  });
});
