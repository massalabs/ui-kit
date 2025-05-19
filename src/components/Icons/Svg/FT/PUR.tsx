// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { SVGProps } from './svgInterface';

export function PUR(props: SVGProps) {
  let { size } = props;
  return (
    <div>
      <img
        width={size ?? 20}
        height={size ?? 20}
        src="https://assets.coingecko.com/coins/images/55351/standard/charlie.webp"
        alt="PUR"
      />
    </div>
  );
}
