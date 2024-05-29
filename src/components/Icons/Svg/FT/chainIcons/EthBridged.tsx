// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { SVGProps } from '../svgInterface';

/* eslint-disable max-len */
export function EthBridged(props: SVGProps) {
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
      <g clip-path="url(#clip0_6250_50977)">
        <path
          d="M5.6835 2.36841L5.63174 2.54832V7.76844L5.6835 7.82128L8.05117 6.38898L5.6835 2.36841Z"
          fill="white"
        />
        <path
          d="M5.68349 2.36841L3.31577 6.38898L5.68349 7.82128V5.28758V2.36841Z"
          fill="white"
        />
        <path
          d="M5.6835 8.28007L5.65433 8.31647V10.176L5.6835 10.2631L8.05261 6.84851L5.6835 8.28007Z"
          fill="white"
        />
        <path
          d="M5.68349 10.2631V8.28007L3.31577 6.84851L5.68349 10.2631Z"
          fill="white"
        />
        <path
          d="M5.6835 7.8213L8.05117 6.389L5.6835 5.2876V7.8213Z"
          fill="white"
        />
        <path
          d="M3.31577 6.389L5.68349 7.8213V5.2876L3.31577 6.389Z"
          fill="white"
        />
      </g>
      <rect width="12" height="12" rx="6" fill="#FF0000" />
      <path
        d="M5.99939 2.74072L5.95569 2.88927V7.1994L5.99939 7.24303L7.99875 6.06042L5.99939 2.74072Z"
        fill="#FF9595"
      />
      <path
        d="M5.99941 2.74072L4 6.06042L5.99941 7.24303V5.15101V2.74072Z"
        fill="white"
      />
      <path
        d="M5.99942 7.62182L5.97479 7.65188V9.18721L5.99942 9.25917L8 6.43982L5.99942 7.62182Z"
        fill="#FF9595"
      />
      <path
        d="M5.99941 9.25917V7.62182L4 6.43982L5.99941 9.25917Z"
        fill="white"
      />
      <path
        d="M5.99939 7.24302L7.99875 6.0604L5.99939 5.151V7.24302Z"
        fill="#FF6161"
      />
      <path d="M4 6.0604L5.99941 7.24302V5.151L4 6.0604Z" fill="#FF9595" />
      <defs>
        <clipPath id="clip0_6250_50977">
          <rect
            width="4.73684"
            height="7.89474"
            fill="white"
            transform="translate(3.31577 2.36841)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
