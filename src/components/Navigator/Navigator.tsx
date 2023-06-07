import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

import { TbTriangleFilled } from 'react-icons/tb';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../Button';

export interface INavigatorProps extends ComponentPropsWithoutRef<'ol'> {
  nbPages: number;
  activePage: {
    index: number;
    icon: ReactNode;
  };
  onClickNext: () => void;
  onClickBack: () => void;
}

function fillIcon(
  nbPages: number,
  activePage: { index: number; icon: ReactNode },
) {
  let pages = [];

  for (let i = 0; i < nbPages; i++) {
    pages.push(
      i === activePage.index ? (
        <li key={i} data-testid={`active-page-${i}`}>
          <IconContext.Provider value={{ className: 'w-8 h-8' }}>
            {activePage.icon}
          </IconContext.Provider>
        </li>
      ) : (
        <li key={i} data-testid={`inactive-page-${i}`}>
          <IconContext.Provider
            value={{ className: 'w-3.5 h-3 text-tertiary' }}
          >
            <TbTriangleFilled />
          </IconContext.Provider>
        </li>
      ),
    );
  }

  return pages;
}

export function Navigator(props: INavigatorProps) {
  const { nbPages, activePage, onClickNext, onClickBack, ...rest } = props;

  return (
    <ol
      data-testid="navigator"
      className="flex justify-center align-middle items-center gap-5 text-c-default"
      {...rest}
    >
      <Button
        variant="icon"
        customClass="!border border-c-default disabled:border-tertiary"
        onClick={onClickBack}
        disabled={activePage.index === 0}
        data-testid="button-back"
      >
        <FiArrowLeft />
      </Button>
      {fillIcon(nbPages, activePage)}
      <Button
        variant="icon"
        customClass="!border border-c-default disabled:border-tertiary"
        onClick={onClickNext}
        disabled={activePage.index === nbPages - 1}
        data-testid="button-next"
      >
        <FiArrowRight />
      </Button>
    </ol>
  );
}
