// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { SVGProps } from './svgInterface';

/* eslint-disable max-len */
export function USDT(props: SVGProps) {
  let { size, ...rest } = props;
  return (
    <svg
      width={size ?? 23}
      height={size ?? 20}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_6298_32923)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.20965 0.0982283L0.0175551 8.90373C0.00160295 8.93648 -0.00345218 8.97348 0.00312896 9.00931C0.00971009 9.04514 0.0275822 9.07792 0.0541318 9.10287L11.376 19.9519C11.4081 19.9828 11.451 20 11.4955 20C11.5401 20 11.5829 19.9828 11.6151 19.9519L22.9369 9.10355C22.9635 9.0786 22.9813 9.04582 22.9879 9.00998C22.9945 8.97415 22.9894 8.93716 22.9735 8.90441L18.7814 0.0989057C18.7679 0.0693331 18.7461 0.0442813 18.7187 0.0267445C18.6913 0.00920761 18.6595 -7.2543e-05 18.627 1.31083e-05H4.36544C4.33276 -0.000393409 4.30067 0.0086632 4.27303 0.0260904C4.24538 0.0435177 4.22337 0.068571 4.20965 0.0982283Z"
          fill="#50AF95"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9502 9.80799C12.8689 9.81408 12.4489 9.83914 11.5122 9.83914C10.7671 9.83914 10.2381 9.81679 10.0525 9.80799C7.1731 9.68132 5.02388 9.18009 5.02388 8.57996C5.02388 7.97983 7.1731 7.47927 10.0525 7.35057V9.30878C10.2408 9.32233 10.78 9.35416 11.525 9.35416C12.4191 9.35416 12.8669 9.31691 12.9475 9.30946V7.35193C15.8208 7.47995 17.9653 7.98118 17.9653 8.57996C17.9653 9.17873 15.8215 9.67997 12.9475 9.80731L12.9502 9.80799ZM12.9502 7.1494V5.39711H16.9601V2.72498H6.04261V5.39711H10.0518V7.14872C6.79311 7.29842 4.34247 7.94393 4.34247 8.71746C4.34247 9.49099 6.79311 10.1358 10.0518 10.2862V15.9014H12.9495V10.2842C16.2008 10.1345 18.6473 9.48963 18.6473 8.71678C18.6473 7.94393 16.2028 7.29909 12.9495 7.14872L12.9502 7.1494Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6298_32923">
          <rect width="22.9912" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
