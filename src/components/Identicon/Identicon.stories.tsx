import { Identicon } from './Identicon';

export default { title: 'Components/Identicon' };

export const _Identicon = {
  render: () => (
    <>
      <Identicon size={32} username="test" />
      <Identicon size={48} username="test2" saturation={70} />
      <Identicon size={64} username="test3" lightness={20} />
      <Identicon size={128} username="test4" saturation={95} lightness={30} />
    </>
  ),
};
