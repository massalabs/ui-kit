const config = {
  transformIgnorePatterns: ['node_modules/(?!minidenticons)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

module.exports = config;
