export type ToasterMessage = {
  pending: string;
  success: string;
  error: string;
  timeout?: string;
};

export interface Asset {
  decimals: number;
  balance: bigint;
  symbol: string;
  address?: string;
  isNative?: boolean;
}
