import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('Components | Buttons | Account Selector', () => {
  test('it should render', () => {
    render(<RadioButton />);

    let radioButton = screen.getByTestId('radio-button');

    expect(radioButton).toBeInTheDocument();
  });
});
