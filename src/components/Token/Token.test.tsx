import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Token } from '.';
import { FT1 } from '../Icons';

describe('Components | Token', () => {
  test('it should render', () => {
    render(
      <Token
        logo={<FT1 size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={9}
        balance={'18178156156151817'}
        disable={false}
        onDelete={() => console.log('delete')}
      />,
    );

    let token = screen.getByTestId('token');

    expect(token).toBeInTheDocument();
  });
});
