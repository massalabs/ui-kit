import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Transaction } from './Transaction';
import { FiUser, FiAlertTriangle } from 'react-icons/fi';

describe('Components | Buttons | Transaction', () => {
  test('it should render', () => {
    const args = {
      preIcon: <FiUser className="text-neutral" />,
      title: 'Transaction category',
      address:
        '0x71c081f64f7bfe8ecb486029875f8e088db220649c62ab2c253da6c471ae137b',
      posIcon: <FiAlertTriangle />,
      amount: '0,00',
      date: 'Friday, 05:00 PM',
    };
    render(<Transaction {...args} />);

    let transaction = screen.getByTestId('transaction');

    expect(transaction).toBeInTheDocument();
  });
});
