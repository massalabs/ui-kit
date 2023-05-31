// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';

export interface BalanceProps extends ComponentPropsWithoutRef<'div'> {
  size: 'xs' | 'lg';
  amount: string;
  equal?: string;
  customClass?: string;
}

export function Balance({ ...props }) {
  const { size = 'lg', amount, equal, customClass } = props;

  const isLg = size === 'lg';
  const sizeClass = isLg ? 'mas-banner mb-1' : 'mas-buttons mb-0.5';
  const iconClass = isLg ? 'mr-2' : 'mr-1';
  const logoClass = isLg ? 32 : 16;

  return (
    <div
      data-testid="balance"
      className={`flex items-center w-fit p-5 bg-primary ${customClass}`}
    >
      <MassaLogo size={logoClass} className={iconClass} />
      <label className={`${sizeClass} text-f-primary`}>{amount}</label>
      {equal ? (
        <label className="ml-2 mt-3 body2 text-info">≈ {equal}</label>
      ) : null}
    </div>
  );
}
