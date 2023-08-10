import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Money } from './Money';

describe('Components | Fields | Money', () => {
  test('it should render', () => {
    render(<Money />);

    let input = screen.getByTestId('money-field');

    expect(input).toBeInTheDocument();
  });

  test('it should set a new placeholder content', () => {
    render(<Money placeholder={'something'} />);

    let input = screen.getByPlaceholderText('something');

    expect(input).toBeInTheDocument();
  });

  test('it should show an error message', () => {
    render(<Money error={'euh'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('money-field');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-error');
    expect(input.getAttribute('class')).toContain('border-s-error');
  });

  test('it should show an warning message', () => {
    render(<Money warning={'warn'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('money-field');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-warning');
    expect(input.getAttribute('class')).toContain('border-s-warning');
  });

  test('it should change border color on focusIn', () => {
    render(<Money />);

    let input = screen.getByTestId('money-field');

    fireEvent.focus(input);

    expect(input.getAttribute('class')).toContain('default-input');
  });
});
