import { BUILDNET_CHAIN_ID, MAINNET_CHAIN_ID } from '@massalabs/massa-web3';
import { getAssetIcons } from './tokenIcons';
import { mainnet, sepolia, bsc, bscTestnet } from 'viem/chains';

export default { title: 'Icons/FT' };

export const _FT = {
  render: () => (
    <table className="text-f-primary w-full">
      <thead>
        <tr>
          <th className="p-4">Origin chain</th>
          <th className="p-4">BNB</th>
          <th className="p-4">DAI</th>
          <th className="p-4">USDC</th>
          <th className="p-4">WETH</th>
          <th className="p-4">WMAS</th>
          <th className="p-4">Unknown</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4">Native and default</td>
          <td className="p-4">{getAssetIcons('BNB', undefined, 44)}</td>
          <td className="p-4">{getAssetIcons('DAI', undefined, 44)}</td>
          <td className="p-4">{getAssetIcons('USDC', undefined, 44)}</td>
          <td className="p-4">{getAssetIcons('WETH', undefined, 44)}</td>
          <td className="p-4">{getAssetIcons('WMAS', undefined, 44)}</td>
          <td className="p-4">{getAssetIcons('', undefined, 44)}</td>
        </tr>
        <tr>
          <td className="p-4">Ethereum</td>
          <td className="p-4">{getAssetIcons('BNB', mainnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('DAI', mainnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('USDC', mainnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WETH', mainnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WMAS', mainnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('', mainnet.id, 44)}</td>
        </tr>
        <tr>
          <td className="p-4">Sepolia</td>
          <td className="p-4">{getAssetIcons('BNB', sepolia.id, 44)}</td>
          <td className="p-4">{getAssetIcons('DAI', sepolia.id, 44)}</td>
          <td className="p-4">{getAssetIcons('USDC', sepolia.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WETH', sepolia.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WMAS', sepolia.id, 44)}</td>
          <td className="p-4">{getAssetIcons('', sepolia.id, 44)}</td>
        </tr>
        <tr>
          <td className="p-4">BSC</td>
          <td className="p-4">{getAssetIcons('BNB', bsc.id, 44)}</td>
          <td className="p-4">{getAssetIcons('DAI', bsc.id, 44)}</td>
          <td className="p-4">{getAssetIcons('USDC', bsc.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WETH', bsc.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WMAS', bsc.id, 44)}</td>
          <td className="p-4">{getAssetIcons('', bsc.id, 44)}</td>
        </tr>
        <tr>
          <td className="p-4">BSC Testnet</td>
          <td className="p-4">{getAssetIcons('BNB', bscTestnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('DAI', bscTestnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('USDC', bscTestnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WETH', bscTestnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('WMAS', bscTestnet.id, 44)}</td>
          <td className="p-4">{getAssetIcons('', bscTestnet.id, 44)}</td>
        </tr>
        <tr>
          <td className="p-4">Massa Mainnet</td>
          <td className="p-4">
            {getAssetIcons('BNB', Number(MAINNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('DAI', Number(MAINNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('USDC', Number(MAINNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('WETH', Number(MAINNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('WMAS', Number(MAINNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('', Number(MAINNET_CHAIN_ID), 44)}
          </td>
        </tr>
        <tr>
          <td className="p-4">Massa Buildnet</td>
          <td className="p-4">
            {getAssetIcons('BNB', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('DAI', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('USDC', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('WETH', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('WMAS', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
          <td className="p-4">
            {getAssetIcons('', Number(BUILDNET_CHAIN_ID), 44)}
          </td>
        </tr>
      </tbody>
    </table>
  ),
};

export const _EXPE = {
  render: () => <div></div>,
};
