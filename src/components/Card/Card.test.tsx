import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Components | Card', () => {
  test('it should render', () => {
    render(
      <Card>
        <div>I am a card component</div>
      </Card>,
    );

    let description = screen.getByTestId('card');

    expect(description).toBeInTheDocument();
  });
});
