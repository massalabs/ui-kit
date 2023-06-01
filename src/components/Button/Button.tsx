// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
  variant?: 'secondary' | 'primary' | 'danger' | undefined;
  customClass?: string;
}

export function Button(props: ButtonProps) {
  const {
    children,
    preIcon,
    posIcon,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  interface Classes {
    [key: string]: string | object;
  }

  const classes: Classes = {
    primary: 'default-primary',
    secondary: 'default-secondary',
    danger: 'default-danger',
  };

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button px-4 py-3 ${classes[variant]} ${customClass}`}
      {...rest}
    >
      <div className="w-fit m-auto flex gap-2 items-baseline">
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-6 h-6' }}>
            {preIcon}
          </IconContext.Provider>
        </div>
        {children}
        <div className="m-auto">
          <IconContext.Provider value={{ className: 'w-6 h-6' }}>
            {posIcon}
          </IconContext.Provider>
        </div>
      </div>
    </button>
  );
}
