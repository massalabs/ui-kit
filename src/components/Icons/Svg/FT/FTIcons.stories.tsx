import { getAssetIcons } from './tokenIcons';

export default { title: 'Icons/FT' };

export const _FT = {
  render: () => (
    <div className="text-f-primary">
      <p>WMAS native, mainnet</p>
      {getAssetIcons('WMAS', true, false, 52)}

      <br />
      <p>DAI native, testnet</p>
      {getAssetIcons('DAI', true, false, 52)}

      <br />
      <p>USDC native, mainnet</p>
      {getAssetIcons('USDC', true, true, 52)}

      <br />
      <p>ETH non-native</p>
      {getAssetIcons('WETH', false, false, 52)}

      <br />
      <p>unknown</p>
      {getAssetIcons('', false, false, 52)}
    </div>
  ),
};
