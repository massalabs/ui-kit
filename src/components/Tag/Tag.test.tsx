import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from './Tag';

describe('Components | Tag', () => {
  test('it should render', () => {
    render(<Tag type="default" content="default type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toBeTruthy();
  });

  test('it should have white class with 30% opacity', () => {
    render(<Tag type="default" content="default type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-white/30');
  });

  test('it should have info-1 class', () => {
    render(<Tag type="info" content="info type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-s-info-1');
  });

  test('it should have error class', () => {
    render(<Tag type="error" content="error type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-s-error');
  });

  test('it should have success class', () => {
    render(<Tag type="success" content="success type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-s-success');
  });

  test('it should have warning class', () => {
    render(<Tag type="warning" content="warning type" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-s-warning');
  });
});
