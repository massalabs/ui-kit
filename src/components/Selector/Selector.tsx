// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef, cloneElement } from 'react';

export interface SelectorProps extends ComponentPropsWithoutRef<'div'> {
  preIcon: JSX.Element;
  content: string;
  posIcon: JSX.Element;
  amount: string;
  customClass?: string;
  variant?: 'secondary' | undefined;
  children?: ReactNode;
}

interface Classes {
  [key: string]: string | object;
}

export function Selector(props: SelectorProps) {
  let {
    preIcon,
    content,
    posIcon,
    amount,
    variant = 'primary',
    children,
    customClass,
    ...rest
  } = props;

  const CLASSES: Classes = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-primary text-f-primary rounded-full p-1 h-8 w-8 mr-2',
    },
    secondary: {
      default: 'default-secondary',
      preIcon: 'bg-neutral text-f-secondary rounded-full p-1 h-8 w-8 mr-2',
    },
  };

  const VARIANT = CLASSES[variant] as Classes;

  const clonedPreIcon = preIcon
    ? cloneElement(preIcon, {
        className: VARIANT.preIcon,
      })
    : null;

  return (
    <div
      data-testid="selector"
      className={`h-14 w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                  flex flex-row items-center justify-between
                  ${CLASSES.root}
                  ${VARIANT.default}
                  ${customClass}`}
      {...rest}
    >
      <div className={`${CLASSES.root}`}>
        {clonedPreIcon}
        {content}
      </div>
      <div className={`${CLASSES.root} gap-2`}>
        {amount}
        {posIcon}
      </div>
    </div>
  );
}
