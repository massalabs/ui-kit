// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode } from 'react';
import { bsc, bscTestnet, mainnet, sepolia } from 'viem/chains';
import { MassaLogo } from '../Massa';
import {
  BNB,
  DAIFromBSC,
  USDCFromBSC,
  WETHFromBSC,
  DAI,
  USDC,
  FT1,
  DAIFromEthereum,
  USDCFromEthereum,
  WETHFromEthereum,
  DAIFromSepolia,
  USDCFromSepolia,
  WETHFromSepolia,
  WMAS,
  WETH,
} from '.';

const createElement = (
  Component: React.FC<{ size?: number }>,
  size?: number,
  customClass = '',
) => (
  <div className={customClass}>
    <Component size={size} />
  </div>
);

/**
 * Return the icon of the asset.
 * The icon will have a badge with the chain logo if originChainId is defined.
 *
 * @param symbol of the token
 * @param originChainId chain id where the token comes from, undefined will return the native token with no badge
 * @param size size of the icon
 * @param customClass custom class to apply to the icon
 * @returns
 */
export function getAssetIcons(
  symbol: string,
  originChainId?: number,
  size?: number,
  customClass = '',
): ReactNode {
  const icons = {
    // Native
    BNB: createElement(BNB, size, customClass),
    DAI: createElement(DAI, size, customClass),
    USDC: createElement(USDC, size, customClass),
    WETH: createElement(WETH, size, customClass),
    WMAS: createElement(WMAS, size, customClass),
    MAS: <MassaLogo size={size} className={customClass} />,
    // Overwrite
    ...getTokenIcons(originChainId, size, customClass),
  };

  if (symbol in icons) {
    return icons[symbol as keyof typeof icons];
  } else {
    return <FT1 size={size} />;
  }
}

function getTokenIcons(
  originChainId?: number,
  size?: number,
  customClass = '',
) {
  switch (originChainId) {
    case bsc.id:
    case bscTestnet.id:
      return {
        DAI: createElement(DAIFromBSC, size, customClass),
        USDC: createElement(USDCFromBSC, size, customClass),
        WETH: createElement(WETHFromBSC, size, customClass),
      };
    case mainnet.id:
      return {
        DAI: createElement(DAIFromEthereum, size, customClass),
        USDC: createElement(USDCFromEthereum, size, customClass),
        WETH: createElement(WETHFromEthereum, size, customClass),
      };
    case sepolia.id:
      return {
        DAI: createElement(DAIFromSepolia, size, customClass),
        USDC: createElement(USDCFromSepolia, size, customClass),
        WETH: createElement(WETHFromSepolia, size, customClass),
      };
    default:
      return {};
  }
}
