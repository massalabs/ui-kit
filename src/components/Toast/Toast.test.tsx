import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

describe('Components | Toast', () => {
  test('it should render', () => {
    render(<Toast content="this is the content" error="Oupps!" />);

    let input = screen.getByTestId('toast');

    expect(input).toBeInTheDocument();
  });
});
