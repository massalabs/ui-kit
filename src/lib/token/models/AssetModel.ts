export type Asset = {
  name: string;
  decimals: number;
  symbol: string;
  address: string;
  allowance?: bigint;
  balance?: bigint;
  dollarValue?: string;
  chainId?: number;
  isDefault?: boolean;
};
