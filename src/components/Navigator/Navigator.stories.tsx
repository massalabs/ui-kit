import { Navigator } from './Navigator';

import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';

export default { title: 'Components/Navigator', component: Navigator };

export const _Navigator = {
  render: () => (
    <>
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
      <br />
      <br />
      <Navigator
        items={[
          {
            icon: <FiHome />,
            isActive: false,
          },
          {
            icon: <FiCodepen />,
            isActive: true,
          },
          {
            icon: <FiGlobe />,
            isActive: false,
          },
        ]}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />
      <br />
      <br />
      <Navigator
        items={[
          {
            icon: <FiHome />,
            isActive: false,
          },
          {
            icon: <FiCodepen />,
            isActive: false,
          },
          {
            icon: <FiGlobe />,
            isActive: true,
          },
        ]}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />
    </>
  ),
};
