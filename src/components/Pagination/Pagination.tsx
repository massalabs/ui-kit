// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

function renderPagination(
  pages: number,
  currentPage: number,
  onPageChange: (newPage: number) => void,
  pageClass: string,
  currentpageClass: string,
): React.ReactNode[] {
  const pagination: React.ReactNode[] = [];

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages;

  const addPageLink = (pageNumber: number, className: string): void => {
    pagination.push(
      <a
        onClick={() => onPageChange(pageNumber)}
        className={className}
        key={pageNumber}
      >
        {pageNumber}
      </a>,
    );
  };

  const addEllipsis = (key: string): void => {
    pagination.push(
      <span className={pageClass} key={key}>
        ...
      </span>,
    );
  };

  addPageLink(1, currentPage === 1 ? currentpageClass : pageClass);

  const MAX_PAGES = 7;
  const MIN_LEFT_PAGES = 3;
  const MIN_RIGHT_PAGES = pages - 4;

  if (pages > MAX_PAGES) {
    if (currentPage > 2 && !isFirstPage) {
      addEllipsis('startEllipsis');
    }

    if (isFirstPage) {
      for (let i = 2; i < 4; i++) {
        addPageLink(i, i === currentPage ? currentpageClass : pageClass);
      }
    } else if (currentPage < MIN_LEFT_PAGES) {
      for (let i = currentPage; i <= currentPage + 1; i++) {
        addPageLink(i, i === currentPage ? currentpageClass : pageClass);
      }
    } else if (currentPage < MIN_RIGHT_PAGES) {
      for (let i = currentPage; i < currentPage + 3; i++) {
        addPageLink(i, i === currentPage ? currentpageClass : pageClass);
      }
    } else if (currentPage >= MIN_RIGHT_PAGES) {
      for (let i = MIN_RIGHT_PAGES; i < pages; i++) {
        addPageLink(i, i === currentPage ? currentpageClass : pageClass);
      }
    }

    if (
      currentPage + 2 < pages - 1 &&
      !isLastPage &&
      currentPage < MIN_RIGHT_PAGES
    ) {
      addEllipsis('endEllipsis');
    }

    if (isFirstPage) {
      for (let i = pages - 2; i < pages; i++) {
        const className = i === currentPage ? currentpageClass : pageClass;
        addPageLink(i, className);
      }
    } else if (currentPage < MIN_LEFT_PAGES) {
      for (let i = pages - 2; i < pages; i++) {
        const className = i === currentPage ? currentpageClass : pageClass;
        addPageLink(i, className);
      }
    }
  }
  if (pages > 1 && pages <= MAX_PAGES) {
    for (let i = 2; i < pages; i++) {
      const className = i === currentPage ? currentpageClass : pageClass;
      addPageLink(i, className);
    }
  }

  addPageLink(pages, pages === currentPage ? currentpageClass : pageClass);

  return pagination;
}

export interface PaginationProps {
  pages: number;
  currentPage: number;
  customClass?: string;
  onPageChange: (newPage: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { pages, currentPage, customClass, onPageChange } = props;
  const pageClass = 'px-3 py-1 rounded-lg cursor-pointer';
  const currentpageClass = `${pageClass} bg-f-primary text-f-secondary`;

  const pagination = renderPagination(
    pages,
    currentPage,
    onPageChange,
    pageClass,
    currentpageClass,
  );

  return (
    <div
      data-testid="pagination"
      className={`bg-primary flex items-center text-f-primary ${customClass}`}
    >
      <a
        onClick={() =>
          currentPage !== 1 ? onPageChange(currentPage - 1) : undefined
        }
        className={currentPage !== 1 ? pageClass : 'px-3 py-1 rounded-lg'}
      >
        <FiChevronRight className="rotate-180" />
      </a>
      {pagination}
      <a
        onClick={() =>
          currentPage !== pages ? onPageChange(currentPage + 1) : undefined
        }
        className={currentPage !== pages ? pageClass : 'px-3 py-1 rounded-lg'}
      >
        <FiChevronRight />
      </a>
    </div>
  );
}
