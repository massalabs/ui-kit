import { defineConfig } from 'cypress';

import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';
export default defineConfig({
  component: {
    // macbook-15 default
    viewportWidth: 1440,
    viewportHeight: 900,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
