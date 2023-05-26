import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Components | Tabs', () => {
  test('it should render', () => {
    const tabsConfig = [
      {
        label: 'Tab1',
        content: 'Content Panel 1',
        icon: '😍',
      },
      {
        label: 'Tab2',
        content: 'Content Panel 2',
        icon: '🤓',
      },
    ];

    const args = {
      tabsConfig,
    };
    render(<Tabs {...args} />);

    let accountSelector = screen.getByTestId('tabs-selector');

    expect(accountSelector).toBeTruthy();
  });

  test('it fire the onClick fn', () => {
    const onClickMock = jest.fn();
    const tabsConfig = [
      {
        label: 'Tab1',
        content: 'Content Panel 1',
        icon: '😍',
      },
      {
        label: 'Tab2',
        content: 'Content Panel 2',
        icon: '🤓',
      },
    ];

    const args = {
      tabsConfig,
    };
    render(<Tabs onClick={onClickMock} {...args} />);

    let tabSelector = screen.getByTestId('tabs-selector');

    fireEvent.click(tabSelector);
    expect(onClickMock).toHaveBeenCalled();
    expect(tabSelector).toBeTruthy();
  });
});
