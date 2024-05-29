// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { ReactNode } from 'react';
import { bsc, bscTestnet, mainnet, sepolia } from 'viem/chains';
import { MassaLogo } from '../Massa';
import { BNB, DAI, USDC, FT1, WMAS, WETH } from '.';
import {
  Bsc,
  BscBridged,
  Eth,
  EthBridged,
  Sepolia,
  SepoliaBridged,
} from './chainIcons';

interface ChainIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

interface FtIconProps {
  size?: number;
}

export function createCustomFt(
  ChainIcon: React.FC<ChainIconProps>,
  FtIcon: React.FC<FtIconProps>,
  size?: number,
) {
  return (
    <div className="flex flex-col-reverse relative h-fit">
      <div
        className={`flex flex-col-reverse items-end justify-end absolute w-[115%] h-[115%] `}
      >
        <ChainIcon size={size && size / 2} className="absolute" />
      </div>
      <FtIcon size={size} />
    </div>
  );
}

export function createNativeFt(FtIcon: React.FC<FtIconProps>, size?: number) {
  return (
    <>
      <FtIcon size={size} />
    </>
  );
}

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

function getTokenIcons(
  isNative: boolean,
  originChainId?: number,
  size?: number,
) {
  switch (originChainId) {
    case bsc.id:
    case bscTestnet.id:
      if (isNative) {
        return {
          DAI: createCustomFt(Bsc, DAI, size),
          USDC: createCustomFt(Bsc, USDC, size),
          WETH: createCustomFt(Bsc, WETH, size),
          BNB: createCustomFt(Bsc, BNB, size),
        };
      } else {
        return {
          DAI: createCustomFt(BscBridged, DAI, size),
          USDC: createCustomFt(BscBridged, USDC, size),
          WETH: createCustomFt(BscBridged, WETH, size),
          BNB: createCustomFt(BscBridged, BNB, size),
        };
      }
    case mainnet.id:
      if (isNative) {
        return {
          DAI: createCustomFt(Eth, DAI, size),
          USDC: createCustomFt(Eth, USDC, size),
          WETH: createCustomFt(Eth, WETH, size),
        };
      } else {
        return {
          DAI: createCustomFt(EthBridged, DAI, size),
          USDC: createCustomFt(EthBridged, USDC, size),
          WETH: createCustomFt(EthBridged, WETH, size),
        };
      }
    case sepolia.id:
      if (isNative) {
        return {
          DAI: createCustomFt(Sepolia, DAI, size),
          USDC: createCustomFt(Sepolia, USDC, size),
          WETH: createCustomFt(Sepolia, WETH, size),
        };
      } else {
        return {
          DAI: createCustomFt(SepoliaBridged, DAI, size),
          USDC: createCustomFt(SepoliaBridged, USDC, size),
          WETH: createCustomFt(SepoliaBridged, WETH, size),
        };
      }
    default:
      return {};
  }
}
