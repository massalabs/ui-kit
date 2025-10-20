export interface TransactionValidationResult {
  valid: boolean;
  error?: string;
}

export interface AmountValidationResult {
  valid: boolean;
  error?: string;
  amount?: bigint;
}

/**
 * Validates and parses an amount string
 */
export function validateAmount(
  amount: bigint,
  availableBalance: bigint,
  decimals: number,
  minAmount = 0n,
): AmountValidationResult {
  if (!amount) {
    return { valid: false, error: 'Amount is required' };
  }

  if (amount < minAmount) {
    const minAmountFormatted = (Number(minAmount) / 10 ** decimals).toFixed(
      decimals,
    );
    return {
      valid: false,
      error: `Minimum amount is ${minAmountFormatted}`,
    };
  }

  if (amount > availableBalance) {
    return { valid: false, error: 'Insufficient balance' };
  }

  return {
    valid: true,
    amount,
  };
}

/**
 * Calculates the total cost of a transaction (amount + fees)
 */
export function calculateTotalCost(amount: bigint, fee: bigint): bigint {
  return amount + fee;
}

/**
 * Checks if the user has sufficient balance for the transaction
 */
export function hasSufficientBalance(
  availableBalance: bigint,
  amount: bigint,
  fee: bigint,
): boolean {
  return availableBalance >= amount + fee;
}
