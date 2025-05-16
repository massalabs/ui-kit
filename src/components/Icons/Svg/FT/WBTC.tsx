// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { SVGProps } from './svgInterface';

/* eslint-disable max-len */
export function WBTC(props: SVGProps) {
  let { size } = props;
  return (
    <div>
      <img
        width={size ?? 20}
        height={size ?? 20}
        src="https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png"
        alt="WBTC"
      />
    </div>
  );
}
