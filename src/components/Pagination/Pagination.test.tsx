import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Components | Pagination', () => {
  test('it should render', () => {
    render(
      <Pagination
        pages={40}
        currentPage={1}
        onPageChange={(newPage: number) =>
          console.log('move to page ' + newPage)
        }
      />,
    );

    let pagination = screen.getByTestId('pagination');

    expect(pagination).toBeTruthy();
  });
});
