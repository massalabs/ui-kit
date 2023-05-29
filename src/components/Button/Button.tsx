// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
  variant?: 'secondary' | undefined;
}

export function Button(props: ButtonProps) {
  const { children, preIcon, posIcon, variant, ...rest } = props;

  const primaryClass = `bg-c-default text-primary
                        hover:bg-c-hover
                        active:bg-c-pressed 
                        disabled:text-f-disabled-2 disabled:bg-c-disabled-1 disabled:border-c-disabled-1`;

  const secondaryClass = `text-f-primary
                          hover:bg-neutral/[.15]
                          active:bg-neutral/[.3]                                                  
                          disabled:text-f-disabled-1 disabled:bg-c-disabled-2 disabled:border-c-disabled-1`;

  const buttonClass = variant ? secondaryClass : primaryClass;

  return (
    <button
      data-testid="button"
      type="button"
      {...rest}
      className={`default-button px-4 py-3 ${buttonClass}`}
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
