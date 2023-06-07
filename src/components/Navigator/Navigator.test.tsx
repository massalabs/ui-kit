import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Navigator } from '.';

import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';

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

describe('Components | IconNavigator', () => {
  test('it should render', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 0, icon: pages[0].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let iconNavigator = screen.getByTestId('navigator');

    expect(iconNavigator).toBeInTheDocument();
  });

  test('it has the 2nd page active', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 1, icon: pages[1].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let page1 = screen.getByTestId('active-page-1');

    expect(page1).toBeInTheDocument();
  });

  test('it has the 1st page inactive, the 2nd page active and the 3rd page inactive', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 1, icon: pages[1].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let page0 = screen.getByTestId('inactive-page-0');
    let page1 = screen.getByTestId('active-page-1');
    let page2 = screen.getByTestId('inactive-page-2');

    expect(page0).toBeInTheDocument();
    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
  });

  test('it has backButton disable and nextButton enable if page 0 is active', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 0, icon: pages[0].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let page0 = screen.getByTestId('active-page-0');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(page0).toBeInTheDocument();
    expect(backButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
  });

  test('it has backButton enable and nextButton enable if page 1 is active', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 1, icon: pages[1].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let page1 = screen.getByTestId('active-page-1');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(page1).toBeInTheDocument();
    expect(backButton).toBeEnabled();
    expect(nextButton).toBeEnabled();
  });

  test('it has backButton enable and nextButton disable if page 2 is active', () => {
    render(
      <Navigator
        nbPages={pages.length}
        activePage={{ index: 2, icon: pages[2].icon }}
        onClickNext={() => console.log('Next clicked')}
        onClickBack={() => console.log('Back clicked')}
      />,
    );

    let page2 = screen.getByTestId('active-page-2');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(page2).toBeInTheDocument();
    expect(backButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });
});
