// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';

import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { IconContext } from 'react-icons/lib';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  preIcon?: ReactNode;
  posIcon?: ReactNode;
  model?: 'single' | 'border';
  pressed?: boolean;
  variant?: 'secondary' | 'primary' | 'danger' | 'toggle' | 'icon' | undefined;
  customClass?: string;
  hoverText?: ReactNode;
}

export function ButtonToggle(props: ButtonProps) {
  const { children, customClass = '', pressed, ...rest } = props;

  const pressedClass = pressed
    ? 'text-tertiary bg-primary border-secondary hover:border-c-hover'
    : '';

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button default-toggle border-0 ${pressedClass} ${customClass}`}
      {...rest}
    >
      <div className="w-fit m-auto flex gap-2 items-baseline"> {children}</div>
    </button>
  );
}

export function ButtonIcon(props: ButtonProps) {
  const {
    children,
    model = 'single',
    customClass = '',
    hoverText,
    ...rest
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const showHoverText = hoverText && isHovered;

  const models: Models = {
    border:
      'disabled:text-tertiary disabled:bg-secondary disabled:border-tertiary disabled:hover:border-tertiary',
    single:
      'border-0 bg-secondary hover:bg-tertiary disabled:bg-secondary disabled:text-tertiary',
  };

  interface Models {
    [key: string]: string | object;
  }

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button default-icon ${models[model]} ${customClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <div className="relative w-full flex justify-center items-center">
        {showHoverText && (
          <div
            className="absolute text-primary top-[-44px] w-fit z-10 bg-neutral 
          mas-caption rounded-md whitespace-nowrap"
          >
            <p className="w-fit py-1 px-2">{hoverText}</p>
            <div className="absolute flex flex-col w-full items-center justify-center">
              <div
                className="w-0 h-0 border-4 border-solid border-neutral 
              border-l-transparent border-r-transparent border-b-transparent"
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="w-fit m-auto flex gap-2 items-baseline">{children}</div>
    </button>
  );
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
    toggle: 'default-toggle',
    icon: 'default-icon',
  };

  const isToggle = variant === 'toggle';
  const isIcon = variant === 'icon';

  return isToggle ? (
    <ButtonToggle {...props} />
  ) : isIcon ? (
    <ButtonIcon {...props} />
  ) : (
    <button
      data-testid="button"
      type="button"
      className={`default-button flex min-h-12 items-center px-4 ${classes[variant]} ${customClass}`}
      {...rest}
    >
      <div className="w-fit m-auto flex items-center gap-2">
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
