import { extractMNSUrl } from './useResolveDeweb';

describe('extractMNSUrl', () => {
  describe('basic URL extraction', () => {
    test('extracts MNS URL from basic massa.network domain', () => {
      const input = 'https://example.massa.network/path/to/resource';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path/to/resource');
    });

    test('extracts MNS URL from subdomain with multiple levels', () => {
      const input = 'https://sub.example.massa.network/deep/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('sub.massa/deep/path');
    });

    test('handles URLs without path', () => {
      const input = 'https://example.massa.network';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/');
    });

    test('handles URLs with only root path', () => {
      const input = 'https://example.massa.network/';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/');
    });
  });

  describe('URL components handling', () => {
    test('preserves query parameters', () => {
      const input =
        'https://example.massa.network/path?param1=value1&param2=value2';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path?param1=value1&param2=value2');
    });

    test('preserves hash fragments', () => {
      const input = 'https://example.massa.network/path#section1';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path#section1');
    });

    test('preserves both query parameters and hash fragments', () => {
      const input = 'https://example.massa.network/path?param=value#section';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path?param=value#section');
    });

    test('handles complex paths with multiple segments', () => {
      const input = 'https://example.massa.network/api/v1/users/123/profile';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/api/v1/users/123/profile');
    });
  });

  describe('different protocols', () => {
    test('handles HTTP protocol', () => {
      const input = 'http://example.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path');
    });

    test('handles custom protocol', () => {
      const input = 'custom://example.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('example.massa/path');
    });
  });

  describe('edge cases', () => {
    test('handles single character subdomain', () => {
      const input = 'https://a.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('a.massa/path');
    });

    test('handles numeric subdomain', () => {
      const input = 'https://123.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('123.massa/path');
    });

    test('handles subdomain with hyphens', () => {
      const input = 'https://my-app.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('my-app.massa/path');
    });

    test('handles subdomain with underscores', () => {
      const input = 'https://my_app.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('my_app.massa/path');
    });
  });

  describe('error handling', () => {
    test('throws error for invalid URL', () => {
      const input = 'not-a-valid-url';
      expect(() => extractMNSUrl(input)).toThrow();
    });

    test('throws error for empty string', () => {
      const input = '';
      expect(() => extractMNSUrl(input)).toThrow();
    });

    test('throws error for malformed URL', () => {
      const input = 'https://';
      expect(() => extractMNSUrl(input)).toThrow();
    });
  });
});
