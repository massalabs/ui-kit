// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { ReactNode } from 'react';
import { bsc, bscTestnet, mainnet, sepolia } from 'viem/chains';
import { MassaLogo } from '../Massa';
import { BNB, DAI, USDC, USDT, FT1, WMAS, WETH, SVGProps } from '.';
import {
  Bsc,
  BscBridged,
  Eth,
  EthBridged,
  Sepolia,
  SepoliaBridged,
} from '../ChainIcons';

export function createBridgedFt(
  ChainIcon: React.FC<SVGProps>,
  FtIcon: React.FC<SVGProps>,
  size?: number,
) {
  return (
    <div className="flex flex-col-reverse relative h-fit">
      <div
        className={`flex flex-col-reverse items-end justify-end absolute w-[120%] h-[120%] `}
      >
        <ChainIcon size={size && size / 2} className="absolute" />
      </div>
      <FtIcon size={size} />
    </div>
  );
}

export function createNativeFt(FtIcon: React.FC<SVGProps>, size?: number) {
  return <FtIcon size={size} />;
}

/**
 * Return the icon of the asset.
 * The icon will have a badge with the chain logo if originChainId is defined.
 *
 * @param symbol of the token
 * @param originChainId chain id where the token comes from, undefined will return the native token with no badge
 * @param isNative if the token is native or bridged
 * @param size size of the icon
 * @returns
 */
export function getAssetIcons(
  symbol: string,
  originChainId?: number,
  isNative = true,
  size?: number,
): ReactNode {
  const icons = {
    // Native
    BNB: createNativeFt(BNB, size),
    DAI: createNativeFt(DAI, size),
    USDC: createNativeFt(USDC, size),
    WETH: createNativeFt(WETH, size),
    WMAS: createNativeFt(WMAS, size),
    USDT: createNativeFt(USDT, size),
    MAS: <MassaLogo size={size} />,
    // Overwrite
    ...getTokenIcons(isNative, originChainId, size),
  };

  if (symbol in icons) {
    return icons[symbol as keyof typeof icons];
  } else {
    return <FT1 size={size} />;
  }
}

type ChainConfig = {
  native: React.FC<SVGProps>;
  bridged: React.FC<SVGProps>;
};

const chainConfig: Record<number, ChainConfig> = {
  [bsc.id]: { native: Bsc, bridged: BscBridged },
  [bscTestnet.id]: { native: Bsc, bridged: BscBridged },
  [mainnet.id]: { native: Eth, bridged: EthBridged },
  [sepolia.id]: { native: Sepolia, bridged: SepoliaBridged },
};

const tokenIcons: { [key: string]: (props: SVGProps) => JSX.Element } = {
  DAI: DAI,
  USDC: USDC,
  WETH: WETH,
  BNB: BNB,
  USDT: USDT,
};

function getTokenIcons(
  isNative: boolean,
  originChainId?: number,
  size?: number,
) {
  if (originChainId && chainConfig[originChainId]) {
    const ChainIcon = isNative
      ? chainConfig[originChainId].native
      : chainConfig[originChainId].bridged;

    return Object.fromEntries(
      Object.keys(tokenIcons).map((token) => [
        token,
        createBridgedFt(ChainIcon, tokenIcons[token], size),
      ]),
    );
  }
  return {};
}
