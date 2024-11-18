// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { SVGProps } from './svgInterface';

/* eslint-disable max-len */
export function POM(props: SVGProps) {
  let { size } = props;
  return (
    <div>
      <img
        width={size ?? 20}
        height={size ?? 20}
        src="https://massa-station-assets.s3.eu-west-3.amazonaws.com/plugins/wallet/icons/pom.png"
        alt="POM"
      />
    </div>
  );
}
