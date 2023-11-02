import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InlineInput } from '.';

describe('Components | Fields | InlineInput', () => {
  test('it should render', () => {
    render(<InlineInput value="value" />);

    let inlineInput = screen.getByTestId('inline-input');

    expect(inlineInput).toBeInTheDocument();
  });
});
