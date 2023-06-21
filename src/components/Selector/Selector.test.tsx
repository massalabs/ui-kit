import { render, screen } from '@testing-library/react';
import { Selector } from './Selector';
import { FiUser, FiAlertTriangle } from 'react-icons/fi';

describe('Components | Buttons | Selector', () => {
  test('it should render', () => {
    const args = {
      preIcon: <FiUser className="text-neutral" />,
      posIcon: <FiAlertTriangle />,
      content: {
        title: 'account #',
        amount: '0,000.00',
      },
    };
    render(<Selector {...args} />);

    let accountSelector = screen.getByTestId('selector');

    expect(accountSelector).toBeTruthy();
  });

  /* Solve this ...props problem */
  // test('it fire the onClick fn', () => {
  //   const onClickMock = jest.fn();
  //   const args = {
  //     preIcon: <FiUser className="text-neutral" />,
  //     posIcon: <FiAlertTriangle />,
  //     content: {
  //       title: 'account #',
  //       amount: '0,000.00',
  //     },
  //   };
  //   render(<Selector onClick={onClickMock} {...args} />);

  //   let accountSelector = screen.getByTestId('selector');

  //   fireEvent.click(accountSelector);
  //   expect(onClickMock).toHaveBeenCalled();
  //   expect(accountSelector).toBeTruthy();
  // });
});
