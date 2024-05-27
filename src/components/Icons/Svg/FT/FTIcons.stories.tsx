import { BUILDNET_CHAIN_ID, MAINNET_CHAIN_ID } from '@massalabs/massa-web3';
import { getAssetIcons } from './tokenIcons';
import { mainnet, sepolia, bsc, bscTestnet } from 'viem/chains';
export default { title: 'Icons/FT' };
export const _FT = {
  render: () => (
    <div className="flex flex-col gap-10 text-f-primary">
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">Ethereum</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', mainnet.id, 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', mainnet.id, 44)}
        <p>USDC:</p>
        {getAssetIcons('USDC', mainnet.id, 44)}
        <p>WETH:</p>
        {getAssetIcons('WETH', mainnet.id, 44)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', mainnet.id, 44)}
        <p>Unknown:</p>
        {getAssetIcons('', mainnet.id, 52)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">Sepolia</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', sepolia.id, 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', sepolia.id, 52)}
        <p>USDC:</p>
        {getAssetIcons('USDC', sepolia.id, 52)}
        <p>WETH:</p>
        {getAssetIcons('WETH', sepolia.id, 52)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', sepolia.id, 44)}
        <p>Unknown:</p>
        {getAssetIcons('', sepolia.id, 52)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">BSC</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', bsc.id, 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', bsc.id, 52)}
        <p>USDC:</p>
        {getAssetIcons('USDC', bsc.id, 52)}
        <p>WETH:</p>
        {getAssetIcons('WETH', bsc.id, 52)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', bsc.id, 52)}
        <p>Unknown:</p>
        {getAssetIcons('', bsc.id, 52)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">BSC Testnet</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', bscTestnet.id, 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', bscTestnet.id, 52)}
        <p>USDC:</p>
        {getAssetIcons('USDC', bscTestnet.id, 52)}
        <p>WETH:</p>
        {getAssetIcons('WETH', bscTestnet.id, 52)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', bscTestnet.id, 52)}
        <p>Unknown:</p>
        {getAssetIcons('', bscTestnet.id, 52)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">Massa Mainnet</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', Number(MAINNET_CHAIN_ID), 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', Number(MAINNET_CHAIN_ID), 52)}
        <p>USDC:</p>
        {getAssetIcons('USDC', Number(MAINNET_CHAIN_ID), 52)}
        <p>WETH:</p>
        {getAssetIcons('WETH', Number(MAINNET_CHAIN_ID), 52)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', Number(MAINNET_CHAIN_ID), 52)}
        <p>Unknown:</p>
        {getAssetIcons('', Number(MAINNET_CHAIN_ID), 52)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h2 className="mas-subtitle">Massa Buildnet</h2>
        <p>BNB:</p>
        {getAssetIcons('BNB', Number(BUILDNET_CHAIN_ID), 52)}
        <p>DAI:</p>
        {getAssetIcons('DAI', Number(BUILDNET_CHAIN_ID), 52)}
        <p>USDC:</p>
        {getAssetIcons('USDC', Number(BUILDNET_CHAIN_ID), 52)}
        <p>WETH:</p>
        {getAssetIcons('WETH', Number(BUILDNET_CHAIN_ID), 52)}
        <p>WMAS:</p>
        {getAssetIcons('WMAS', Number(BUILDNET_CHAIN_ID), 52)}
        <p>Unknown:</p>
        {getAssetIcons('', Number(BUILDNET_CHAIN_ID), 52)}
      </div>
    </div>
  ),
};
