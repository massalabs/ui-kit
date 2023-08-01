import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Token } from '.';
import { MassaLogo } from '../Icons';

const massaToken = {
  logo: <MassaLogo size={40} />,
  balance: '000,000,000.00',
  name: 'Token',
  symbol: 'SYMBL',
};

describe('Components | Token', () => {
  test('it should render', () => {
    render(<Token token={massaToken} />);

    let token = screen.getByTestId('token');

    expect(token).toBeInTheDocument();
  });
});
