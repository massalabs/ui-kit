import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from '.';

describe('Components | Fields | TextArea', () => {
  test('it should render', () => {
    render(<TextArea />);

    let textArea = screen.getByTestId('text-area');

    expect(textArea).toBeInTheDocument();
  });

  test('it should set a new placeholder content', () => {
    render(<TextArea placeholder={'something'} />);

    let textArea = screen.getByPlaceholderText('something');

    expect(textArea).toBeInTheDocument();
  });

  test('it should show an error message', () => {
    render(<TextArea error={'euh'} />);

    let message = screen.getByTestId('text-area-message');
    let textArea = screen.getByTestId('text-area');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-error');
    expect(textArea.getAttribute('class')).toContain('border-s-error');
  });

  test('it should show an warning message', () => {
    render(<TextArea warning={'warn'} />);

    let message = screen.getByTestId('text-area-message');
    let textArea = screen.getByTestId('text-area');

    expect(message).toBeInTheDocument();
    expect(message.getAttribute('class')).toContain('text-s-warning');
    expect(textArea.getAttribute('class')).toContain('border-s-warning');
  });

  test('it should change border color on focusIn', () => {
    render(<TextArea />);

    let textArea = screen.getByTestId('text-area');

    fireEvent.focus(textArea);

    expect(textArea.getAttribute('class')).toContain('default-input');
  });
});
