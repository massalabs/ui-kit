// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode } from 'react';

import { USDCMassaSvg } from './ETHUSDCSvg';
import { SepoliaDaiSvg } from './SepoliaDaiSvg';
import { SepoliaUSDCSvg } from './SepoliaUSDCSvg';
import { SepoliaWethSvg } from './SepoliaWethSvg';
import { TDaiMassaSvg } from './TDaiMassaSvg';
import { TDaiSvg } from './TDaiSvg';
import { USDCSvg } from './USDCSvg';
import { WEthMassaSvg } from './WEthMassaSvg';
import { WEthSvg } from './WEthSvg';
import { MassaLogo } from '../Massa';

export function getIcon(
  symbolEVM: string,
  nativeToken = false,
  isMainnet = false,
  size?: number,
  customClass = '',
): ReactNode {
  const tokens = getTokenIcons(nativeToken, isMainnet, size, customClass);
  const icons = {
    tDAI: tokens.tDAI,
    WETH: tokens.WETH,
    USDC: tokens.USDC,
    DAI: tokens.tDAI,
    MAS: <MassaLogo size={size} className={customClass} />,
  };
  return icons[symbolEVM as keyof typeof icons];
}

function getTokenIcons(
  nativeToken = false,
  isMainnet = false,
  size?: number,
  customClass = '',
) {
  if (!nativeToken) {
    return {
      tDAI: (
        <div className={customClass}>
          <TDaiSvg size={size} />
        </div>
      ),
      WETH: (
        <div className={customClass}>
          <WEthSvg size={size} />
        </div>
      ),
      USDC: (
        <div className={customClass}>
          <USDCSvg size={size} />
        </div>
      ),
    };
  } else if (isMainnet) {
    return {
      tDAI: (
        <div className={customClass}>
          <TDaiMassaSvg size={size} />
        </div>
      ),
      WETH: (
        <div className={customClass}>
          <WEthMassaSvg size={size} />
        </div>
      ),
      USDC: (
        <div className={customClass}>
          <USDCMassaSvg size={size} />
        </div>
      ),
    };
  }
  return {
    tDAI: (
      <div className={customClass}>
        <SepoliaDaiSvg size={size} />
      </div>
    ),
    WETH: (
      <div className={customClass}>
        <SepoliaWethSvg size={size} />
      </div>
    ),
    USDC: (
      <div className={customClass}>
        <SepoliaUSDCSvg size={size} />
      </div>
    ),
  };
}
