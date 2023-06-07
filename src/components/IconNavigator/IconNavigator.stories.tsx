import { ReactNode } from 'react';
import { IconNavigator } from './IconNavigator';

import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';

export default { title: 'Components/IconNavigator', component: IconNavigator };

const pages = [
  {
    logo: <FiHome />,
  },
  {
    logo: <FiCodepen />,
  },
  {
    logo: <FiGlobe />,
  },
];

export const _IconNavigator = {
  render: () => (
    <>
      {pages.map((page: { logo: ReactNode }, index: number) => (
        <>
          <div key={index}>
            <IconNavigator
              nbPages={pages.length}
              activePage={{ index: index, logo: page.logo }}
              onClickNext={() => console.log('Next clicked')}
              onClickBack={() => console.log('Back clicked')}
            />
          </div>
          <br />
          <br />
        </>
      ))}
    </>
  ),
};
