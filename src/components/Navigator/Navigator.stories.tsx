import { ReactNode } from 'react';
import { Navigator } from './Navigator';

import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';

export default { title: 'Components/Navigator', component: Navigator };

const pages = [
  {
    icon: <FiHome />,
  },
  {
    icon: <FiCodepen />,
  },
  {
    icon: <FiGlobe />,
  },
];

export const _Navigator = {
  render: () => (
    <>
      {pages.map((page: { icon: ReactNode }, index: number) => (
        <>
          <div key={index}>
            <Navigator
              nbPages={pages.length}
              activePage={{ index: index, icon: page.icon }}
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
