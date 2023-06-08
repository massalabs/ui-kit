// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';

interface SVGProps extends ComponentPropsWithoutRef<'div'> {
  size?: number;
  variant?: string;
}

function Rounded(props: SVGProps) {
  let { size } = props;

  return (
    <svg
      width={size ?? 40}
      height={size ?? 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2580_20523)">
        <rect width="40" height="40" rx="20" fill="#151A26" />
        <mask
          id="mask0_2580_20523"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <path d="M40 0H0V40H40V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2580_20523)">
          <path
            d="M19.999 40V28.7938L0 19.999H11.2063L19.999 0V11.2063L40 19.999H28.7938L19.999 40Z"
            fill="#1AE19D"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2580_20523">
          <rect width="40" height="40" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Squared(props: SVGProps) {
  let { size, ...rest } = props;

  return (
    <div
      className={`bg-primary w-fit rounded-lg`}
      data-testid="svg-icon"
      {...rest}
    >
      <svg
        width={size ?? 40}
        height={size ?? 40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1854_17276)">
          <rect width="40" height="40" rx="8" fill="#151A26" />
          <mask
            id="mask0_1854_17276"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="40"
            height="40"
          >
            <path d="M40 0H0V40H40V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1854_17276)">
            <path
              d="M19.999 40V28.7938L0 19.999H11.2063L19.999 0V11.2063L40 19.999H28.7938L19.999 40Z"
              fill="#1AE19D"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1854_17276">
            <rect width="40" height="40" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function MassaWallet(props: SVGProps) {
  let { variant = 'squared' } = props;

  return variant === 'squared' ? <Squared /> : <Rounded />;
}
