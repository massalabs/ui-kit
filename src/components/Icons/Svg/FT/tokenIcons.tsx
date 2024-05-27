// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode } from 'react';
import { bsc, bscTestnet } from 'viem/chains';
import { USDCMassaSvg } from './ETHUSDCSvg';
import { SepoliaDaiSvg } from './SepoliaDaiSvg';
import { SepoliaUSDCSvg } from './SepoliaUSDCSvg';
import { SepoliaWethSvg } from './SepoliaWethSvg';
import { TDaiMassaSvg } from './TDaiMassaSvg';
import { TDaiSvg } from './TDaiSvg';
import { USDCSvg } from './USDCSvg';
import { WEthMassaSvg } from './WEthMassaSvg';
import { WEthSvg } from './WEthSvg';
import { FT1, MassaLogo } from '../Massa';
import { WMasSvg } from './WMasSvg';
import { BSCUsdc } from './BSCUsdc';
import { BSCWeth } from './BSCWeth';
import { BSCDai } from './BSCDai';
import { BSC } from './BSC';

export function getAssetIcons(
  symbolEVM: string,
  nativeToken = false,
  isMainnet = false,
  chainId: number,
  size?: number,
  customClass = '',
): ReactNode {
  const tokens = getTokenIcons(
    nativeToken,
    isMainnet,
    chainId,
    size,
    customClass,
  );
  const icons = {
    tDAI: tokens.tDAI,
    WETH: tokens.WETH,
    USDC: tokens.USDC,
    DAI: tokens.tDAI,
    WMAS: tokens.WMAS,
    BNB: tokens.BNB,
    MAS: <MassaLogo size={size} className={customClass} />,
  };

  if (symbolEVM in icons) {
    return icons[symbolEVM as keyof typeof icons];
  } else {
    return <FT1 size={size} />;
  }
}

function getTokenIcons(
  nativeToken = false,
  isMainnet = false,
  chainId?: number,
  size?: number,
  customClass = '',
) {
  const createSvgElement = (
    SvgComponent: React.FC<{ size?: number }>,
    size?: number,
    customClass = '',
  ) => (
    <div className={customClass}>
      <SvgComponent size={size} />
    </div>
  );

  if (!nativeToken) {
    return {
      tDAI: createSvgElement(TDaiSvg, size, customClass),
      WETH: createSvgElement(WEthSvg, size, customClass),
      USDC: createSvgElement(USDCSvg, size, customClass),
      WMAS: createSvgElement(WMasSvg, size, customClass),
    };
  } else if (isMainnet) {
    if (chainId === bsc.id) {
      return {
        tDAI: createSvgElement(BSCDai, size, customClass),
        BNB: createSvgElement(BSC, size, customClass),
        WETH: createSvgElement(BSCWeth, size, customClass),
        USDC: createSvgElement(BSCUsdc, size, customClass),
        WMAS: createSvgElement(WMasSvg, size, customClass),
      };
    } else {
      return {
        tDAI: createSvgElement(TDaiMassaSvg, size, customClass),
        WETH: createSvgElement(WEthMassaSvg, size, customClass),
        USDC: createSvgElement(USDCMassaSvg, size, customClass),
        WMAS: createSvgElement(WMasSvg, size, customClass),
      };
    }
  }
  if (chainId === bscTestnet.id) {
    return {
      tDAI: createSvgElement(BSCDai, size, customClass),
      WETH: createSvgElement(BSCWeth, size, customClass),
      USDC: createSvgElement(BSCUsdc, size, customClass),
      WMAS: createSvgElement(WMasSvg, size, customClass),
      BNB: createSvgElement(BSC, size, customClass),
    };
  }

  return {
    tDAI: createSvgElement(SepoliaDaiSvg, size, customClass),
    WETH: createSvgElement(SepoliaWethSvg, size, customClass),
    USDC: createSvgElement(SepoliaUSDCSvg, size, customClass),
    WMAS: createSvgElement(WMasSvg, size, customClass),
  };
}
