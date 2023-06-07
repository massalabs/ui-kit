// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

import { TbTriangleFilled } from 'react-icons/tb';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../Button';

interface IItems {
  icon: ReactNode;
  isActive: boolean;
}

export interface INavigatorProps extends ComponentPropsWithoutRef<'div'> {
  items: IItems[];
  onClickNext: () => void;
  onClickBack: () => void;
}

function Items(props: { items: IItems[] }) {
  const { items } = props;

  return (
    <>
      {items.map(({ icon, isActive }, index) =>
        isActive ? (
          <div key={index} data-testid={`active-item-${index}`}>
            <IconContext.Provider value={{ className: 'w-8 h-8' }}>
              {icon}
            </IconContext.Provider>
          </div>
        ) : (
          <div key={index} data-testid={`inactive-item-${index}`}>
            <IconContext.Provider
              value={{ className: 'w-3.5 h-3 text-tertiary' }}
            >
              <TbTriangleFilled />
            </IconContext.Provider>
          </div>
        ),
      )}
    </>
  );
}

export function Navigator(props: INavigatorProps) {
  const { items, onClickNext, onClickBack, ...rest } = props;

  const nbItems = items.length;
  const activeItemIndex = items.findIndex((item) => item.isActive);

  return (
    <div
      data-testid="navigator"
      className="flex justify-center align-middle items-center gap-5 text-c-default"
      {...rest}
    >
      <Button
        variant="icon"
        customClass="!border border-c-default disabled:border-tertiary"
        onClick={onClickBack}
        disabled={activeItemIndex === 0}
        data-testid="button-back"
      >
        <FiArrowLeft />
      </Button>
      <Items items={items} />
      <Button
        variant="icon"
        customClass="!border border-c-default disabled:border-tertiary"
        onClick={onClickNext}
        disabled={activeItemIndex === nbItems - 1}
        data-testid="button-next"
      >
        <FiArrowRight />
      </Button>
    </div>
  );
}
