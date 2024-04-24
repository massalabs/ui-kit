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

export function getIcon(
  symbolEVM: string,
  nativeToken = false,
  isMainnet = false,
): ReactNode {
  const tokens = getTokenIcons(nativeToken, isMainnet);
  const icons = {
    tDAI: tokens.tDAI,
    WETH: tokens.WETH,
    USDC: tokens.USDC,
    DAI: tokens.tDAI,
  };
  return icons[symbolEVM as keyof typeof icons];
}

function getTokenIcons(nativeToken = false, isMainnet = false) {
  if (!nativeToken) {
    return {
      tDAI: <TDaiSvg />,
      WETH: <WEthSvg />,
      USDC: <USDCSvg />,
    };
  } else if (isMainnet) {
    return {
      tDAI: <TDaiMassaSvg />,
      WETH: <WEthMassaSvg />,
      USDC: <USDCMassaSvg />,
    };
  }
  return {
    tDAI: <SepoliaDaiSvg />,
    WETH: <SepoliaWethSvg />,
    USDC: <SepoliaUSDCSvg />,
  };
}
