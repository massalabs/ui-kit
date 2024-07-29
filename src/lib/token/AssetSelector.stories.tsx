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

const assets = [
  {
    name: 'Dummy asset',
    address: 'ASBLBLABLA...BLA',
    symbol: 'DAS',
    decimals: 18,
    balance: undefined,
    isDefault: true,
    dollarValue: undefined,
    originChainId: 0,
  } as Asset,
  {
    name: 'PUR token',
    address: 'ASBLBLABLA...BLA',
    symbol: 'PUR',
    decimals: 18,
    balance: undefined,
    isDefault: true,
    dollarValue: undefined,
    originChainId: 0,
  } as Asset,
  {
    name: 'PUR token',
    address: 'ASBLBLABLA...BLA',
    symbol: 'WETH',
    decimals: 18,
    balance: '1001000000000000000000',
    isDefault: true,
    dollarValue: undefined,
    originChainId: mainnet.id,
  } as Asset,
];

const selectedAsset = undefined;

export const _ConnectMassaWallet = {
  render: () => (
    <AssetSelector
      selectedAsset={selectedAsset}
      assets={assets}
      setSelectedAsset={console.log}
      isAssetsLoading={false}
    />
  ),
};
