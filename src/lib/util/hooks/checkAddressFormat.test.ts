import { checkAddressFormat } from '../checkAddressFormat';

describe('checkAddressFormat', () => {
  test('should return true for a valid address', () => {
    expect(
      checkAddressFormat(
        'AU1WdPf44f1taEKRpafeEoAj9c6pHiJmCevH865U8MryzmsFdbAW',
      ),
    ).toBe(true);
  });

  test('should return false for an invalid address', () => {
    expect(checkAddressFormat('0x17ZHH18sja19zjsjn19JE91JJDNJEU')).toBe(false);
  });
});
