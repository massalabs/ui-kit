module.exports = {
  extends: ['@massalabs', 'plugin:storybook/recommended'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.{js,ts,tsx}', '**/*.stories.{js,ts,tsx}'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
