// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface LayoutStationProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  navigator?: Navigator;
  logo?: ReactNode;
  customClass?: string;
}

export function LayoutStation({ ...props }) {
  const { children, navigator, logo, customClass } = props;

  return (
    <div
      data-testid="layout-station"
      className={`bg-primary h-screen ${customClass}`}
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-row justify-start">{logo}</div>
        <div className="flex flex-row justify-end">
          {navigator && <div className="flex-row-reversed">{navigator}</div>}
        </div>
      </div>
      {children}
    </div>
  );
}
