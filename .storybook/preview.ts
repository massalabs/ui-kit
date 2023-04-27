import "../src/index.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// Adds theme-dark class so that themes work.
// Default theme is dark.
document.body.onload = function () {
  document.body.classList.add("theme-dark");
};
