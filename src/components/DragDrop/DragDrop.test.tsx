import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DragDrop } from './DragDrop';

describe('Components | DragDrop', () => {
  test('it should render', () => {
    render(<DragDrop placeholder="something here to user read" />);

    let dragDrop = screen.getByTestId('drag-drop');

    expect(dragDrop).toBeInTheDocument();
  });
});
