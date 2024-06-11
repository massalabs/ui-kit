import {
  formatAmount,
  roundDecimalPartToTwoSignificantDigit,
} from './parseAmount';

describe('formatAmount', () => {
  test('formats an empty string', () => {
    const result = formatAmount('', 18);
    expect(result).toEqual({
      preview: '0',
      full: '0',
    });
  });

  test('formats an amount with default parameters', () => {
    const result = formatAmount('123456789012345678901', 18);
    expect(result).toEqual({
      preview: '123.46',
      full: '123.456789012345678901',
    });
  });

  test('formats an amount with BigInt', () => {
    const result = formatAmount(123456789012345678901n, 18);
    expect(result).toEqual({
      preview: '123.46',
      full: '123.456789012345678901',
    });
  });

  test('formats an amount with less than the specified decimals', () => {
    const result = formatAmount('12345', 8);
    expect(result).toEqual({
      preview: '0.00012',
      full: '0.00012345',
    });
  });

  test('formats an amount with custom separator', () => {
    const result = formatAmount('123456789012345678901', 9, "'");
    expect(result).toEqual({
      preview: "123'456'789'012.35",
      full: "123'456'789'012.345678901",
    });
  });

  test('adds padding zeroes when necessary', () => {
    const result = formatAmount('1', 18, ',');
    expect(result).toEqual({
      preview: '0.000000000000000001',
      full: '0.000000000000000001',
    });
  });

  test('handles amount with exact decimals length', () => {
    const result = formatAmount('1000000000000000000', 18);
    expect(result).toEqual({
      preview: '1',
      full: '1',
    });
  });

  test('formats an amount with less than the specified decimals and round up', () => {
    const result = formatAmount('69500', 9);
    expect(result).toEqual({
      preview: '0.00007',
      full: '0.0000695',
    });
  });

  test('formats an empty string', () => {
    const result = formatAmount('', 18).full;
    expect(result).toEqual('0');
  });

  test('formats an amount with default parameters', () => {
    const result = formatAmount('123456789012345678901', 18).full;
    expect(result).toEqual('123.456789012345678901');
  });

  test('formats an amount with less than the specified decimals', () => {
    const result = formatAmount('12345', 8).full;
    expect(result).toEqual('0.00012345');
  });

  test('adds padding zeroes when necessary', () => {
    const result = formatAmount('1', 18).full;
    expect(result).toEqual('0.000000000000000001');
  });

  test('handles amount with exact decimals length', () => {
    const result = formatAmount('1000000000000000000', 18).full;
    expect(result).toEqual('1');
  });

  test('formats an amount with less than the specified decimals and round up', () => {
    const result = formatAmount('69000', 9).full;
    expect(result).toEqual('0.000069');
  });

  it('formatAmount with min  string value', () => {
    const value = '0000000000';
    const result = formatAmount(value.toString()).full;
    expect(result).toBe('0');
  });

  it('formatAmount with min bigint value', () => {
    const value = 0n;
    const result = formatAmount(value.toString()).full;
    expect(result).toBe('0');
  });

  it('formatAmount with mid range string value', () => {
    const value = '10000000000000';
    const result = formatAmount(value.toString()).full;
    expect(result).toBe('10,000');
  });

  it('formatAmount with mid range bigint value', () => {
    const value = 10000000000000n;
    const result = formatAmount(value.toString()).full;
    expect(result).toBe('10,000');
  });

  it('formatAmount with max string value', () => {
    const value = '922337203600000000000';
    const result = formatAmount(value.toString()).full;
    expect(result).toBe('922,337,203,600');
  });
});

describe('roundDecimalPartToOneSignificantDigit', () => {
  test("should return '0' when all digits are zero", () => {
    expect(roundDecimalPartToTwoSignificantDigit('000')).toEqual('0');
  });

  test('should handle a single zero without leading zeroes', () => {
    expect(roundDecimalPartToTwoSignificantDigit('0')).toEqual('0');
  });

  test('should handle a single digit without rounding', () => {
    expect(roundDecimalPartToTwoSignificantDigit('4')).toEqual('4');
  });

  test('should round down when the second digit is less than 5', () => {
    expect(roundDecimalPartToTwoSignificantDigit('0043100')).toEqual('0043');
  });

  test('should round up when the second digit is 5 or more', () => {
    expect(roundDecimalPartToTwoSignificantDigit('000468')).toEqual('00047');
  });

  test('should round up and handle carry-over with trailing zeroes', () => {
    expect(roundDecimalPartToTwoSignificantDigit('0099')).toEqual('0099');
  });
});
