import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Vote } from './Vote';

describe('Components | Buttons | Vote', () => {
  test('it should render', () => {
    const args = {
      votes: 4,
      voted: 'VOTE' as 'VOTE' | 'UNVOTE',
      onVote: () => console.log('onVote'),
    };

    render(<Vote {...args} />);

    let vote = screen.getByTestId('vote');

    expect(vote).toBeTruthy();
  });

  test('it should show no vote', () => {
    const args = {
      votes: 4,
      onVote: () => null,
    };

    render(<Vote {...args} />);

    let voteUpNotFilled = screen.getByTestId('up-not-filled');
    let voteDownNotFilled = screen.getByTestId('down-not-filled');

    expect(voteUpNotFilled).toBeInTheDocument();
    expect(voteDownNotFilled).toBeInTheDocument();
  });

  test('it should show vote up', () => {
    const args = {
      votes: 4,
      voted: 'VOTE' as 'VOTE' | 'UNVOTE',
      onVote: () => null,
    };

    render(<Vote {...args} />);

    let voteUp = screen.getByTestId('vote-up');

    fireEvent.click(voteUp);

    let voteUpFilled = screen.getByTestId('up-filled');
    let voteDownNotFilled = screen.getByTestId('down-not-filled');

    expect(voteUpFilled).toBeInTheDocument();
    expect(voteDownNotFilled).toBeInTheDocument();
  });

  test('it should show vote down', () => {
    const args = {
      votes: 4,
      voted: 'UNVOTE' as 'VOTE' | 'UNVOTE',
      onVote: () => null,
    };

    render(<Vote {...args} />);

    let voteDown = screen.getByTestId('vote-down');

    fireEvent.click(voteDown);

    let voteDownFilled = screen.getByTestId('down-filled');
    let voteUpNotFilled = screen.getByTestId('up-not-filled');

    expect(voteDownFilled).toBeInTheDocument();
    expect(voteUpNotFilled).toBeInTheDocument();
  });
});
