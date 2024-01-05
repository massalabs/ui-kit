// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';

export interface ToggleProps extends ComponentPropsWithoutRef<'input'> {
  tShirtSize?: 'sm' | 'md' | 'lg' | undefined;
}

export function Toggle(props: ToggleProps) {
  const { tShirtSize: size = 'md', ...rest } = props;

  const isSm = size === 'sm';
  const isMd = size === 'md';

  const smClass =
    'w-9 h-5 after:h-4 after:w-4 after:top-[2px] after:left-[2px]';
  const mdClass =
    'w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:left-[2px]';
  const lgClass = 'w-14 h-7 after:h-6 after:w-6 after:top-0.5 after:left-[4px]';

  const sizeClass = isMd ? mdClass : isSm ? smClass : lgClass;

  return (
    <label
      data-testid="toggle"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input type="checkbox" {...rest} className="sr-only peer" />
      <div
        className={`${sizeClass} bg-c-disabled-1
                      peer-checked:bg-brand rounded-full peer
                      peer-focus:outline-none
                      peer-checked:after:translate-x-full peer-checked:after:border-primary 
                      after:content-[''] after:absolute after:bg-primary
                      after:rounded-full after:transition-all`}
      ></div>
    </label>
  );
}
