// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { SVGProps } from '../svgInterface';

/* eslint-disable max-len */
export function Eth(props: SVGProps) {
  const { size, ...rest } = props;
  return (
    <svg
      width={size || 22}
      height={size || 22}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="6" cy="6" r="6" fill="#EBEFF0" />
      <path
        d="M5.9993 2L5.94467 2.18569V7.57337L5.9993 7.62791L8.49851 6.14963L5.9993 2Z"
        fill="#343434"
      />
      <path
        d="M5.99927 2L3.5 6.14963L5.99927 7.62791V5.01287V2Z"
        fill="#8C8C8C"
      />
      <path
        d="M5.99926 8.10141L5.96848 8.13898V10.0582L5.99926 10.1481L8.5 6.6239L5.99926 8.10141Z"
        fill="#3C3C3B"
      />
      <path
        d="M5.99927 10.1481V8.10141L3.5 6.6239L5.99927 10.1481Z"
        fill="#8C8C8C"
      />
      <path
        d="M5.9993 7.62785L8.4985 6.14957L5.9993 5.01282V7.62785Z"
        fill="#141414"
      />
      <path
        d="M3.5 6.14957L5.99927 7.62785V5.01282L3.5 6.14957Z"
        fill="#393939"
      />
    </svg>
  );
}
