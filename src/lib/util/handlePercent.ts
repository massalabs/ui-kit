import { massaToken } from '../massa-react/const';
import { formatAmount } from './parseAmount';

export function handlePercent(
  amount = 0n,
  percent: bigint,
  fees: bigint,
  balance: bigint,
  decimals: number,
  symbol: string,
): string {
  let newAmount = (amount * percent) / 100n;

  if (symbol === massaToken) {
    if (newAmount > balance - fees) {
      if (balance - fees < 0) {
        newAmount = 0n;
      } else {
        newAmount = balance - fees;
      }
    }
  }

  return formatAmount(newAmount.toString(), decimals).full;
}
