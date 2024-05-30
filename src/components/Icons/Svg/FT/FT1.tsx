// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { SVGProps } from './svgInterface';

/* eslint-disable max-len */
export function FT1(props: SVGProps) {
  const { size, ...rest } = props;
  return (
    <svg
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="10" cy="10" r="10" fill="#FF0000" />
      <path
        d="M6 12.3466V8H8.69356V8.84119H6.9467V9.9022H8.58512V10.6789H6.9467V12.3466H6Z"
        fill="white"
      />
      <path
        d="M10.1268 12.3466V8.84705H9.06287V8H12.1257V8.84705H11.0764V12.3466H10.1268Z"
        fill="white"
      />
      <path
        d="M13.0754 12.3466V8.84705H12.4276V8H14.025V12.3466H13.0754Z"
        fill="white"
      />
    </svg>
  );
}
