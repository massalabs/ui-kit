import {
  formatAmount,
  formatStandard,
  roundDecimalPartToOneSignificantDigit,
} from './parseAmount';

describe('formatAmount', () => {
  test('formats an empty string', () => {
    const result = formatAmount('', 18);
    expect(result).toEqual({
      amountFormattedPreview: '0.0',
      amountFormattedFull: '0.000000000000000000',
    });
  });

  test('formats an amount with default parameters', () => {
    const result = formatAmount('123456789012345678901', 18);
    expect(result).toEqual({
      amountFormattedPreview: '123.46',
      amountFormattedFull: '123.456789012345678901',
    });
  });

  test('formats an amount with less than the specified decimals', () => {
    const result = formatAmount('12345', 8);
    expect(result).toEqual({
      amountFormattedPreview: '0.0001',
      amountFormattedFull: '0.00012345',
    });
  });

  test('formats an amount with custom separator', () => {
    const result = formatAmount('123456789012345678901', 9, "'");
    expect(result).toEqual({
      amountFormattedPreview: "123'456'789'012.35",
      amountFormattedFull: "123'456'789'012.345678901",
    });
  });

  test('adds padding zeroes when necessary', () => {
    const result = formatAmount('1', 18, ',');
    expect(result).toEqual({
      amountFormattedPreview: '0.000000000000000001',
      amountFormattedFull: '0.000000000000000001',
    });
  });

  test('handles amount with exact decimals length', () => {
    const result = formatAmount('1000000000000000000', 18);
    expect(result).toEqual({
      amountFormattedPreview: '1.00',
      amountFormattedFull: '1.000000000000000000',
    });
  });

  test('formats an amount with less than the specified decimals and round up', () => {
    const result = formatAmount('69000', 9);
    expect(result).toEqual({
      amountFormattedPreview: '0.00007',
      amountFormattedFull: '0.000069000',
    });
  });
});

describe('roundDecimalPartToOneSignificantDigit', () => {
  test("should return '0' when all digits are zero", () => {
    expect(roundDecimalPartToOneSignificantDigit('000')).toEqual('0');
  });

  test('should handle a single zero without leading zeroes', () => {
    expect(roundDecimalPartToOneSignificantDigit('0')).toEqual('0');
  });

  test('should handle a single digit without rounding', () => {
    expect(roundDecimalPartToOneSignificantDigit('4')).toEqual('4');
  });

  test('should round down when the second digit is less than 5', () => {
    expect(roundDecimalPartToOneSignificantDigit('004300')).toEqual('004');
  });

  test('should round up when the second digit is 5 or more', () => {
    expect(roundDecimalPartToOneSignificantDigit('00046')).toEqual('0005');
  });

  test('should round up and handle carry-over with trailing zeroes', () => {
    expect(roundDecimalPartToOneSignificantDigit('0099')).toEqual('01');
  });
});

describe('formatStandard', () => {
  test('formats an empty string', () => {
    const result = formatStandard('', 18);
    expect(result).toEqual('0');
  });

  test('formats an amount with default parameters', () => {
    const result = formatStandard('123456789012345678901', 18);
    expect(result).toEqual('123.456789012345678901');
  });

  test('formats an amount with less than the specified decimals', () => {
    const result = formatStandard('12345', 8);
    expect(result).toEqual('0.00012345');
  });

  test('adds padding zeroes when necessary', () => {
    const result = formatStandard('1', 18);
    expect(result).toEqual('0.000000000000000001');
  });

  test('handles amount with exact decimals length', () => {
    const result = formatStandard('1000000000000000000', 18);
    expect(result).toEqual('1');
  });

  test('formats an amount with less than the specified decimals and round up', () => {
    const result = formatStandard('69000', 9);
    expect(result).toEqual('0.000069');
  });

  it('formatStandard with min  string value', () => {
    const value = '0000000000';

    const result = formatStandard(value.toString());

    expect(result).toBe('0');
  });

  it('formatStandard with min bigint value', () => {
    const value = 0n;

    const result = formatStandard(value.toString());

    expect(result).toBe('0');
  });

  it('formatStandard with mid range string value', () => {
    const value = '10000000000000';

    const result = formatStandard(value.toString());

    expect(result).toBe('10,000');
  });

  it('formatStandard with mid range bigint value', () => {
    const value = 10000000000000n;

    const result = formatStandard(value.toString());

    expect(result).toBe('10,000');
  });

  it('formatStandard with max string value', () => {
    const value = '922337203600000000000';

    const result = formatStandard(value.toString());

    expect(result).toBe('922,337,203,600');
  });
});
