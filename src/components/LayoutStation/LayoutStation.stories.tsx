import { LayoutStation } from './LayoutStation';
import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';
import { Navigator } from './../Navigator/Navigator';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';

export default { title: 'Components/LaytoutStation', component: LayoutStation };

let navigator = (
  <Navigator
    items={[
      {
        icon: <FiHome />,
        isActive: true,
      },
      {
        icon: <FiCodepen />,
        isActive: false,
      },
      {
        icon: <FiGlobe />,
        isActive: false,
      },
    ]}
    onClickNext={() => console.log('Next clicked')}
    onClickBack={() => console.log('Back clicked')}
  />
);

export const _LayoutStation = {
  render: () => (
    <LayoutStation navigator={navigator} logo={<MassaLogo />}>
      <div className="text-f-primary">Here goes the whole content...</div>
    </LayoutStation>
  ),
};
