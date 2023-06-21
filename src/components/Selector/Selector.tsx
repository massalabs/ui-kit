// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, cloneElement } from 'react';

export interface SelectorProps {
  preIcon: JSX.Element;
  content: ContentDefault | ContentDescription;
  posIcon: JSX.Element;
  customClass?: string;
  variant?: 'secondary';
  type?: 'description';
  children?: ReactNode;
}

interface ContentDefault {
  title: string;
  amount: string;
}

interface ContentDescription {
  title: string;
  website: string;
  description: string;
  vote?: ReactNode;
}

interface Classes {
  [key: string]: string | object;
}

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

export function Selector(props: SelectorProps) {
  const { type = 'default' } = props;

  return type === 'description' ? (
    <SelectorDescription {...props} />
  ) : (
    <SelectorDefault {...props} />
  );
}

export function SelectorDescription(props: SelectorProps) {
  const {
    preIcon,
    content,
    posIcon,
    variant = 'primary',
    children,
    customClass,
    ...rest
  } = props;

  const VARIANT = CLASSES[variant] as Classes;

  const clonedPreIcon =
    preIcon &&
    cloneElement(preIcon, {
      className: VARIANT.preIcon,
    });

  const CONTENT: ContentDescription = content as ContentDescription;

  return (
    <div
      data-testid="description"
      className={`w-full p-3 rounded-lg mas-menu-active cursor-default
                  grid grid-cols-3 grid-rows-2 gap-3 lg:flex lg:justify-between
                  lg:items-center
                  ${VARIANT.default}
                  ${customClass}`}
      {...rest}
    >
      <div className={`${CLASSES.root} col-span-2 justify-self-start`}>
        {clonedPreIcon}
        <div className="flex-col mas-subtitle cursor-pointer">
          <div className="mas-menu-active">{CONTENT.title}</div>
          <div className="mas-caption">{CONTENT.website}</div>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-start-2 self-center mas-caption max-lg:line-clamp-2 lg:max-w-2xl">
        {CONTENT.description}
      </div>
      <div className="row-span-1 col-start-3 row-start-1 place-self-end">
        {CONTENT.vote}
      </div>
    </div>
  );
}

export function SelectorDefault(props: SelectorProps) {
  const {
    preIcon,
    content,
    posIcon,
    variant = 'primary',
    children,
    customClass,
    ...rest
  } = props;

  const VARIANT = CLASSES[variant] as Classes;

  const clonedPreIcon =
    preIcon &&
    cloneElement(preIcon, {
      className: VARIANT.preIcon,
    });

  const CONTENT: ContentDefault = content as ContentDefault;

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
        {CONTENT.title}
      </div>
      <div className={`${CLASSES.root} gap-2`}>
        {CONTENT.amount}
        {posIcon}
      </div>
    </div>
  );
}
