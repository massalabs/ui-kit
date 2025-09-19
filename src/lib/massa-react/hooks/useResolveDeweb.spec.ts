import { extractMNSUrl } from './useResolveDeweb';

describe('extractMNSUrl', () => {
  describe('basic URL extraction', () => {
    test('extracts MNS URL from generic domain', () => {
      const input = 'https://example.com/path/to/resource';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/path/to/resource');
    });

    test('extracts MNS URL from subdomain with multiple levels', () => {
      const input = 'https://sub.example.massa.network/deep/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://sub.massa/deep/path');
    });

    test('handles URLs without path', () => {
      const input = 'https://example.massa.network';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/');
    });

    test('handles URLs with only root path', () => {
      const input = 'https://example.massa.network/';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/');
    });
  });

  describe('URL components handling', () => {
    test('preserves query parameters', () => {
      const input =
        'https://example.deweb.half-red.net/path?param1=value1&param2=value2';
      const result = extractMNSUrl(input);
      expect(result).toBe(
        'https://example.massa/path?param1=value1&param2=value2',
      );
    });

    test('preserves hash fragments', () => {
      const input = 'https://example.massahub.network/path#section1';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/path#section1');
    });

    test('preserves both query parameters and hash fragments', () => {
      const input =
        'https://example.deweb.half-red.net/path?param=value#section';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/path?param=value#section');
    });

    test('handles complex paths with multiple segments', () => {
      const input = 'https://example.massa.network/api/v1/users/123/profile';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://example.massa/api/v1/users/123/profile');
    });
  });

  describe('edge cases', () => {
    test('handles single character subdomain', () => {
      const input = 'https://a.massahub.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://a.massa/path');
    });

    test('handles numeric subdomain', () => {
      const input = 'https://123.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://123.massa/path');
    });

    test('handles subdomain with hyphens', () => {
      const input = 'https://my-app.massa.network/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://my-app.massa/path');
    });

    test('handles subdomain with underscores', () => {
      const input = 'https://my_app.deweb.half-red.net/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://my_app.massa/path');
    });

    test('handles domain without subdomain', () => {
      const input = 'https://mns/path';
      const result = extractMNSUrl(input);
      expect(result).toBe('https://mns.massa/path');
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
