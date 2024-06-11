import { fromMAS } from '@massalabs/web3-utils';
import { massaToken } from '../massa-react/const';
import { handlePercent } from './handlePercent';

describe('handlePercent', () => {
  it('should return correctly formatted amount when no conditions are met', () => {
    const result = handlePercent(
      1000000000000000000n,
      25n,
      0n,
      2000000000000000000n,
      18,
      'ETH',
    );
    expect(result).toBe('0.25');
  });

  it('should return correctly formatted amount when symbol is massaToken and newAmount is within balance', () => {
    const result = handlePercent(
      1000000000n,
      50n,
      fromMAS(0.1),
      1000000000000n,
      9,
      massaToken,
    );
    expect(result).toBe('0.5');
  });

  it('should return 0 when balance minus fees is less than 0', () => {
    const result = handlePercent(
      1000000000n,
      100n,
      fromMAS(30000),
      2000n,
      9,
      massaToken,
    );
    expect(result).toBe('0');
  });

  it('should return balance minus fees when newAmount exceeds balance', () => {
    const result = handlePercent(
      1000000000n,
      100n,
      fromMAS(0.1),
      1000000000n,
      9,
      massaToken,
    );
    expect(result).toBe('0.9');
  });

  it('should handle zero amount correctly', () => {
    const result = handlePercent(0n, 10n, 0n, 1000n, 9, massaToken);
    expect(result).toBe('0');
  });
});
