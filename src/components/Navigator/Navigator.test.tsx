import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Navigator } from '.';

import { FiHome, FiCodepen, FiGlobe } from 'react-icons/fi';

describe('Components | Navigator', () => {
  test('it should render', () => {
    render(
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
      />,
    );

    let iconNavigator = screen.getByTestId('navigator');

    expect(iconNavigator).toBeInTheDocument();
  });

  test('it has the 2nd item active', () => {
    render(
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
      />,
    );

    let item1 = screen.getByTestId('active-item-1');

    expect(item1).toBeInTheDocument();
  });

  test('it has the 1st item inactive, the 2nd item active and the 3rd item inactive', () => {
    render(
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
      />,
    );

    let item0 = screen.getByTestId('inactive-item-0');
    let item1 = screen.getByTestId('active-item-1');
    let item2 = screen.getByTestId('inactive-item-2');

    expect(item0).toBeInTheDocument();
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  test('it has backButton disable and nextButton enable if item 0 is active', () => {
    render(
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
      />,
    );

    let item0 = screen.getByTestId('active-item-0');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(item0).toBeInTheDocument();
    expect(backButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
  });

  test('it has backButton enable and nextButton enable if item 1 is active', () => {
    render(
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
      />,
    );

    let item1 = screen.getByTestId('active-item-1');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(item1).toBeInTheDocument();
    expect(backButton).toBeEnabled();
    expect(nextButton).toBeEnabled();
  });

  test('it has backButton enable and nextButton disable if item 2 is active', () => {
    render(
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
      />,
    );

    let item2 = screen.getByTestId('active-item-2');
    let backButton = screen.getByTestId('button-back');
    let nextButton = screen.getByTestId('button-next');

    expect(item2).toBeInTheDocument();
    expect(backButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });
});
