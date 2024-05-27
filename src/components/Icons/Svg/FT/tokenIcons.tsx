// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode } from 'react';
import { bsc, bscTestnet, sepolia } from 'viem/chains';
import { MassaLogo } from '../Massa';
import {
  BSCBNB,
  BSCDAI,
  BSCUSDC,
  BSCWETH,
  ETHDAI,
  ETHUSDC,
  FT1,
  MassaDAI,
  MassaUSDC,
  MassaWETH,
  SepoliaDAI,
  SepoliaUSDC,
  SepoliaWETH,
  WETH,
  WMAS,
} from '.';
import { BUILDNET_CHAIN_ID, MAINNET_CHAIN_ID } from '@massalabs/massa-web3';

const createElement = (
  Component: React.FC<{ size?: number }>,
  size?: number,
  customClass = '',
) => (
  <div className={customClass}>
    <Component size={size} />
  </div>
);

export function getAssetIcons(
  symbol: string,
  chainId: number,
  size?: number,
  customClass = '',
): ReactNode {
  const icons = {
    // Native
    DAI: createElement(ETHDAI, size, customClass),
    USDC: createElement(ETHUSDC, size, customClass),
    WETH: createElement(WETH, size, customClass),
    BNB: createElement(BSCBNB, size, customClass),
    WMAS: createElement(WMAS, size, customClass),
    MAS: <MassaLogo size={size} className={customClass} />,
    // Overwrite
    ...getTokenIcons(chainId, size, customClass),
  };

  if (symbol in icons) {
    return icons[symbol as keyof typeof icons];
  } else {
    return <FT1 size={size} />;
  }
}

function getTokenIcons(chainId?: number, size?: number, customClass = '') {
  switch (chainId) {
    case bsc.id:
    case bscTestnet.id:
      return {
        DAI: createElement(BSCDAI, size, customClass),
        USDC: createElement(BSCUSDC, size, customClass),
        WETH: createElement(BSCWETH, size, customClass),
      };
    case Number(MAINNET_CHAIN_ID):
    case Number(BUILDNET_CHAIN_ID):
      return {
        DAI: createElement(MassaDAI, size, customClass),
        USDC: createElement(MassaUSDC, size, customClass),
        WETH: createElement(MassaWETH, size, customClass),
      };
    case sepolia.id:
      return {
        DAI: createElement(SepoliaDAI, size, customClass),
        USDC: createElement(SepoliaUSDC, size, customClass),
        WETH: createElement(SepoliaWETH, size, customClass),
      };
    default:
      return {};
  }
}
