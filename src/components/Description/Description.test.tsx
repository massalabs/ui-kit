import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Description } from './Description';
import { FiUser } from 'react-icons/fi';

describe('Components | Buttons | Description', () => {
  test('it should render', () => {
    const args = {
      preIcon: <FiUser className="text-neutral" />,
      title: 'Transaction category',
      website: 'website.massa',
      description: 'Website’s description up to 120 characters',
      votes: 4,
      voted: 'VOTE' as 'VOTE' | 'UNVOTE',
      onVoteUp: () => console.log('up'),
      onVoteDown: () => console.log('down'),
    };
    render(<Description {...args} />);

    let description = screen.getByTestId('description');

    expect(description).toBeInTheDocument();
  });
});
