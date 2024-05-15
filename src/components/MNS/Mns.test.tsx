import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Mns } from './Mns';

describe('Components | Toast', () => {
  test('it should render', () => {
    render(<Mns mns="foo-bar" />);

    let input = screen.getByTestId('mns');

    expect(input).toBeInTheDocument();
  });
});
