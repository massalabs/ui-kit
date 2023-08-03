import { MassaLogo, Mrc20, Mrc721 } from '../Icons';

import { Token } from './Token';

export default { title: 'Components/Token', component: Token };

export const _TokenMassa = {
  render: () => (
    <>
      <Token
        logo={<MassaLogo size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={18}
        balance={'1000000000000000000'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
    </>
  ),
};

export const _TokenMrc = {
  render: () => (
    <>
      <Token
        logo={<Mrc721 size={40} />}
        name={'Massa'}
        symbol={'tDAI'}
        decimals={9}
        balance={'1000000000000000000'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
    </>
  ),
};

export const _MultipleTokens = {
  render: () => (
    <div className="flex flex-col w-full h-fit bg-primary gap-4">
      <Token
        logo={<Mrc721 size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={12}
        balance={'18178156156151817'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
      <Token
        logo={<MassaLogo size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={6}
        balance={'16666155'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
      <Token
        logo={<Mrc20 size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={2}
        balance={'117871871871'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
      <Token
        logo={<Mrc20 size={40} />}
        name={'Massa'}
        symbol={'XMA'}
        decimals={18}
        balance={'11'}
        disable={false}
        onDelete={() => console.log('delete')}
      />
    </div>
  ),
};
