// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { SVGProps } from './svgInterface';

export function FT1(props: SVGProps) {
  const { size, ...rest } = props;
  return (
    <svg
      width={size || 44}
      height={size || 44}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="20" cy="20" r="20" fill="#FF0000" />
      <path
        d="M12 24.6933V16H17.3871V17.6824H13.8934V19.8044H17.1702V21.3578H13.8934V24.6933H12Z"
        fill="white"
      />
      <path
        d="M20.2536 24.6933V17.6941H18.1257V16H24.2515V17.6941H22.1529V24.6933H20.2536Z"
        fill="white"
      />
      <path
        d="M26.1507 24.6933V17.6941H24.8552V16H28.05V24.6933H26.1507Z"
        fill="white"
      />
    </svg>
  );
}
