// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { AssetSelector } from './AssetSelector';
import { Asset } from './models/AssetModel';
import { mainnet } from 'viem/chains';

export default {
  title: 'Lib/Token',
  component: AssetSelector,
};

const assets: Asset[] = [
  {
    name: 'Dummy asset',
    address: 'ASBLBLABLA...BLA',
    symbol: 'DAS',
    decimals: 18,
    balance: undefined,
    dollarValue: undefined,
    chainId: 0,
  },
  {
    name: 'PUR token',
    address: 'ASBLBLABLA...BLA',
    symbol: 'PUR',
    decimals: 18,
    balance: undefined,
    dollarValue: undefined,
    chainId: 0,
  },
  {
    name: 'PUR token',
    address: 'ASBLBLABLA...BLA',
    symbol: 'WETH',
    decimals: 18,
    balance: 1001000000000000000000n,
    dollarValue: undefined,
    chainId: mainnet.id,
  },
];

const selectedAsset = undefined;

export const _ConnectMassaWallet = {
  render: () => (
    <AssetSelector
      selectedAsset={selectedAsset}
      assets={assets}
      onAssetChange={console.log}
      isAssetsLoading={false}
    />
  ),
};
