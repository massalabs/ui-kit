import { MassaLogo, Mrc20, Mrc721 } from '../Icons';

import { Token } from './Token';

export default { title: 'Components/Token', component: Token };

const massaToken = {
  logo: <MassaLogo size={40} />,
  formattedBalance: '000,000,000.00',
  name: 'Token',
  symbol: 'SYMBL',
  rawBalance: '000,000,000.000000000',
};

const mrc20Token = {
  logo: <Mrc20 size={40} />,
  formattedBalance: '000,000,000.00',
  name: 'Token',
  symbol: 'SYMBL',
  rawBalance: '000,000,000.000000000',
};

const mrc721Token = {
  logo: <Mrc721 size={40} />,
  formattedBalance: '000,000,000.00',
  name: 'Token',
  symbol: 'SYMBL',
  rawBalance: '000,000,000.000000000',
};

export const _TokenMassa = {
  render: () => (
    <>
      <Token token={massaToken} disable={true} />
    </>
  ),
};

export const _TokenMrc = {
  render: () => (
    <>
      <Token token={mrc20Token} onDelete={() => console.log('delete')} />
    </>
  ),
};

export const _MultipleTokens = {
  render: () => (
    <div className="flex flex-col w-full h-fit bg-primary gap-4">
      <Token token={massaToken} onDelete={() => console.log('delete')} />
      <Token token={mrc20Token} onDelete={() => console.log('delete')} />
      <Token token={mrc721Token} onDelete={() => console.log('delete')} />
    </div>
  ),
};
