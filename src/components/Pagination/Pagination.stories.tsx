import { Pagination } from './Pagination';

export default { title: 'Components/Pagination', component: Pagination };

export const _Pagination = {
  render: () => (
    <>
      <Pagination
        pages={4}
        currentPage={2}
        onPageChange={(newPage: number) =>
          console.log('move to page ' + newPage)
        }
      />

      <br />
      <br />
      <Pagination
        pages={40}
        currentPage={1}
        onPageChange={(newPage: number) =>
          console.log('move to page ' + newPage)
        }
      />

      <br />
      <br />

      <Pagination
        pages={40}
        currentPage={25}
        onPageChange={(newPage: number) =>
          console.log('move to page ' + newPage)
        }
      />

      <br />
      <br />

      <Pagination
        pages={40}
        currentPage={38}
        onPageChange={(newPage: number) =>
          console.log('move to page ' + newPage)
        }
      />

      <br />
      <br />
    </>
  ),
};
