import { getAssetIcons } from './tokenIcons';
import { mainnet, sepolia, bsc, bscTestnet } from 'viem/chains';
export default { title: 'Icons/FT' };

export const _FT = {
  render: () => (
    <div className="text-f-primary">
      <h2 className="mas-subtitle">NON-NATIVE MAINNET</h2>
      <br />
      <p>DAI non-native, mainnet</p>
      {getAssetIcons('DAI', false, true, mainnet.id, 44)}

      <br />
      <p>WETH non-native, mainnet</p>
      {getAssetIcons('WETH', false, true, mainnet.id, 44)}

      <br />
      <p>USDC non-native, mainnet</p>
      {getAssetIcons('USDC', false, true, mainnet.id, 44)}
      <br />
      <p>WMAS non-native, mainnet</p>
      {getAssetIcons('WMAS', false, true, mainnet.id, 44)}
      <br />
      <p>WMAS native, mainnet</p>
      {getAssetIcons('WMAS', true, false, mainnet.id, 44)}

      <br />
      <h2 className="mas-subtitle">NATIVE TESTNET</h2>
      <br />
      <p>DAI native, testnet</p>
      {getAssetIcons('DAI', true, false, sepolia.id, 52)}

      <br />
      <p>USDC native, testnet</p>
      {getAssetIcons('USDC', true, false, sepolia.id, 52)}

      <br />
      <p>WETH native, testnet</p>
      {getAssetIcons('WETH', true, false, sepolia.id, 52)}

      <br />
      <p>WMAS native, testnet</p>
      {getAssetIcons('WMAS', true, false, sepolia.id, 52)}
      <br />
      <p>DAI(BSC) native, testnet</p>
      {getAssetIcons('DAI', true, false, bscTestnet.id, 52)}

      <br />
      <p>WETH(BSC) native, testnet</p>
      {getAssetIcons('WETH', true, false, bscTestnet.id, 52)}

      <br />
      <p>USDC(BSC) native, testnet</p>
      {getAssetIcons('USDC', true, false, bscTestnet.id, 52)}

      <br />
      <p>BNB(BSC) native, testnet</p>
      {getAssetIcons('BNB', true, false, bscTestnet.id, 52)}

      <br />
      <p>WMAS(BSC) native, testnet</p>
      {getAssetIcons('WMAS', true, false, bscTestnet.id, 52)}

      <br />
      <h2 className="mas-subtitle">NATIVE MAINNET</h2>
      <br />
      <p>USDC native, mainnet</p>
      {getAssetIcons('USDC', true, true, mainnet.id, 52)}
      <br />
      <p>DAI native, mainnet</p>
      {getAssetIcons('DAI', true, true, mainnet.id, 52)}

      <br />
      <p>WETH native, mainnet</p>
      {getAssetIcons('WETH', true, true, mainnet.id, 52)}

      <br />
      <p>WMAS native, mainnet</p>
      {getAssetIcons('WMAS', true, true, mainnet.id, 52)}

      <p>DAI(BSC) native, mainnet</p>
      {getAssetIcons('DAI', true, true, bsc.id, 52)}

      <br />
      <p>WETH(BSC) native, mainnet</p>
      {getAssetIcons('WETH', true, true, bsc.id, 52)}

      <br />
      <p>USDC(BSC) native, mainnet</p>
      {getAssetIcons('USDC', true, true, bsc.id, 52)}

      <br />
      <p>BNB(BSC) native, mainnet</p>
      {getAssetIcons('BNB', true, true, bsc.id, 52)}

      <br />
      <p>WMAS(BSC) native, mainnet</p>
      {getAssetIcons('WMAS', true, true, bsc.id, 52)}

      <br />
      <p>unknown</p>
      {getAssetIcons('', false, false, 0, 52)}
    </div>
  ),
};
