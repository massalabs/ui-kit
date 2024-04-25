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
): ReactNode {
  const tokens = getTokenIcons(nativeToken, isMainnet, size);
  const icons = {
    tDAI: tokens.tDAI,
    WETH: tokens.WETH,
    USDC: tokens.USDC,
    DAI: tokens.tDAI,
    MAS: <MassaLogo size={size} />,
  };
  return icons[symbolEVM as keyof typeof icons];
}

function getTokenIcons(nativeToken = false, isMainnet = false, size?: number) {
  if (!nativeToken) {
    return {
      tDAI: <TDaiSvg size={size} />,
      WETH: <WEthSvg size={size} />,
      USDC: <USDCSvg size={size} />,
    };
  } else if (isMainnet) {
    return {
      tDAI: <TDaiMassaSvg size={size} />,
      WETH: <WEthMassaSvg size={size} />,
      USDC: <USDCMassaSvg size={size} />,
    };
  }
  return {
    tDAI: <SepoliaDaiSvg size={size} />,
    WETH: <SepoliaWethSvg size={size} />,
    USDC: <SepoliaUSDCSvg size={size} />,
  };
}
