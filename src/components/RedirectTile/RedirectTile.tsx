// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { openInNewTab } from '../../util/utils';

export interface RedirectTileProps extends ComponentPropsWithoutRef<'div'> {
  customClass?: string;
  size?: 'md' | 'lg' | 'cs';
  customSize?: string;
  url: string;
}

export function RedirectTile(props: RedirectTileProps) {
  const {
    customClass = '',
    customSize,
    size = 'md',
    url,
    children,
    ...rest
  } = props;

  const sizes = {
    md: 'w-[200px] h-[200px]',
    lg: 'w-[400px] h-[400px]',
    cs: customSize,
  };

  function handleRedirect() {
    if (!url) return;
    openInNewTab(url);
  }

  return (
    <div
      onClick={() => handleRedirect()}
      data-testid="RedirectTile"
      className={`flex flex-col gap-6 justify-center p-4 rounded-md 
      hover:cursor-pointer bg-secondary text-neutral 
      hover:bg-tertiary active:bg-secondary ${sizes[size]} ${customClass}`}
      {...rest}
    >
      {children}
    </div>
  );
}
