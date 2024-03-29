// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';

interface SVGProps extends ComponentPropsWithoutRef<'div'> {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export function MassaLogo(props: SVGProps) {
  let { size, primaryColor, secondaryColor, ...rest } = props;

  if (!primaryColor) {
    primaryColor = '#FF0000';
  }

  if (!secondaryColor) {
    secondaryColor = 'white';
  }

  return (
    <div
      className={`bg-primary w-fit rounded-full`}
      data-testid="svg-icon"
      {...rest}
    >
      <svg
        width={size ?? 32}
        height={size ?? 32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 
        0 12C0 18.6274 5.37258 24 12 24Z"
          fill={primaryColor}
        />
        <path
          d="M17.3257 12.1966L19.1637 9.0123L18.2939 7.51631H14.6159L16.753 
          3.82762C16.1696 3.4872 15.5513 3.21063 14.9086 3.00269L12 8.00358L12.8784 9.51239H16.5564L14.7184 
          12.6989L15.5882 14.2098H21.2132C21.3712 13.5499 21.4579 12.875 21.4718 12.1966H17.3257Z"
          fill={secondaryColor}
        />
        <path
          d="M11.1281 19.9095H12.8784L14.7206 16.7252L16.7253 20.1981C17.3109 19.8612 17.859 
          19.4629 18.3602 19.0098L15.5819 14.2055H13.8401L11.9979 17.392L10.16 14.2141H8.41609L5.63782 
          19.0184C6.13823 19.4724 6.6864 19.8708 7.27272 20.2066L9.27949 16.7316L11.1281 19.9095Z"
          fill={secondaryColor}
        />
        <path
          d="M9.28581 12.6988L7.45001 9.51237H11.1259L12 8.00355L9.09988 2.9877C8.45725 3.19564 
          7.8389 3.47222 7.25553 3.81263L9.39267 7.50133H5.71038L4.83843 8.99732L6.67637 12.1859H2.53674C2.54953 
          12.8693 2.63623 13.5493 2.79534 14.2141H8.416L9.28581 12.6988Z"
          fill={secondaryColor}
        />
      </svg>
    </div>
  );
}
