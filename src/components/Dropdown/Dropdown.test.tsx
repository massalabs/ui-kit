import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Components | Dropdown', () => {
  test('it should render', () => {
    render(
      <Dropdown
        options={[
          { item: 'one', onClick: () => console.log('option 1') },
          { item: 'two' },
        ]}
      />,
    );

    let dropDown = screen.getByTestId('dropdown');

    expect(dropDown).toBeInTheDocument();
  });
});
