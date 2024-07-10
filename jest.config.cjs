const config = {
  transformIgnorePatterns: [
    '/node_modules/(?!(@massalabs|big-varint|minidenticons)/)',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = config;
