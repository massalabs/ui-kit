import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Currency } from './Currency';

describe('Components | Fields | Input', () => {
  test('it should render', () => {
    render(<Currency />);

    let input = screen.getByTestId('currency-field');

    expect(input).toBeInTheDocument();
  });

  test('it should set a new placeholder content', () => {
    render(<Currency placeholder={'something'} />);

    let input = screen.getByPlaceholderText('something');

    expect(input).toBeInTheDocument();
  });

  test('it should show an error message', () => {
    render(<Currency error={'euh'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('currency-field');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-error');
    expect(input.getAttribute('class')).toContain('border-s-error');
  });

  test('it should show an warning message', () => {
    render(<Currency warning={'warn'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('currency-field');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-warning');
    expect(input.getAttribute('class')).toContain('border-s-warning');
  });

  test('it should change border color on focusIn', () => {
    render(<Currency />);

    let input = screen.getByTestId('currency-field');

    fireEvent.focus(input);

    expect(input.getAttribute('class')).toContain('default-input');
  });
});
