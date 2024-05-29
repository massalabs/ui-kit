import { BNB } from './BNB';
import { DAI } from './DAI';
import { USDC } from './USDC';
import { FT1 } from './FT1';
import { WMAS } from './WMAS';
import { WETH } from './WETH';
import { Sepolia } from './chainIcons/Sepolia';
import { SepoliaBridged } from './chainIcons/SepoliaBridged';
import { Eth } from './chainIcons/Eth';
import { EthBridged } from './chainIcons/EthBridged';

import { BscBridged } from './chainIcons/BscBridged';
import { Bsc } from './chainIcons/Bsc';
import { createBridgedFt, createNativeFt, getAssetIcons } from './tokenIcons';
import { bsc, mainnet, sepolia } from 'viem/chains';
export default { title: 'Icons/FT' };

const symbolList = ['DAI', 'BNB', 'USDC', 'FT1', 'WMAS', 'WETH'];

const bscSymbolList = ['DAI', 'BNB', 'USDC', 'WETH'];

const ethSymbolList = ['DAI', 'USDC', 'WETH'];

export const _FT = {
  render: () => (
    <>
      <div className="flex flex-col gap-6">
        <h2 className="text-neutral">Base FT Icons</h2>
        <div className="flex flex-wrap gap-4">
          <BNB />
          <DAI />
          <USDC />
          <FT1 />
          <WMAS />
          <WETH />
        </div>

        <h2 className="text-neutral">Base Chain Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Sepolia />
          <SepoliaBridged />
          <Bsc />
          <BscBridged />
          <Eth />
          <EthBridged />
        </div>

        <h2 className="text-neutral">
          Creating Native Token Icons from function
        </h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">{createNativeFt(BNB)}</div>
          <div className="flex flex-wrap gap-4">{createNativeFt(DAI)}</div>
        </div>

        <h2 className="text-neutral">
          Creating Custom Token Icons from function
        </h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {createBridgedFt(Bsc, BNB)}
            {createBridgedFt(Eth, DAI)}
            {createBridgedFt(Eth, DAI, 66)}
          </div>
        </div>

        <h2 className="text-neutral">Mapping native token</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {symbolList.map((symbol: string) => {
              return getAssetIcons(symbol);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping bsc token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {bscSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, bsc.id);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping eth token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {ethSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, mainnet.id);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping sepolia token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {ethSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, sepolia.id);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping bridged bsc token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {bscSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, bsc.id, false);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping bridged eth token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {ethSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, mainnet.id, false);
            })}
          </div>
        </div>

        <h2 className="text-neutral">Mapping bridged sepolia token list</h2>
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
            {ethSymbolList.map((symbol: string) => {
              return getAssetIcons(symbol, sepolia.id, false);
            })}
          </div>
        </div>
      </div>
    </>
  ),
};
