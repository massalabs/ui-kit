import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Password } from '.';

describe('Components | Fields | Password', () => {
  test('it should render', () => {
    render(<Password />);

    let input = screen.getByTestId('password-input');

    expect(input).toBeTruthy();
  });

  test('it should set a new placeholder content', () => {
    render(<Password placeholder={'something'} />);

    let input = screen.getByPlaceholderText('something');

    expect(input).toBeTruthy();
  });

  test('it should show an error message', () => {
    render(<Password error={'euh'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('password-input');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-error');
    expect(input.getAttribute('class')).toContain('border-s-error');
  });

  test('it should show an warning message', () => {
    render(<Password warning={'warn'} />);

    let message = screen.getByTestId('input-field-message');
    let input = screen.getByTestId('password-input');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-warning');
    expect(input.getAttribute('class')).toContain('border-s-warning');
  });

  test('it should show/hide the input content when switching between eye mode', () => {
    render(<Password placeholder={'something'} />);

    let iconClose = screen.getByTestId('icon-close');
    let input = screen.getByTestId('password-input');

    expect(iconClose).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(iconClose);

    let iconOpen = screen.getByTestId('icon-open');

    expect(iconOpen).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });
});
