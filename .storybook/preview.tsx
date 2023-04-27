import React from "react";
import "../src/index.css";

import type { Preview } from "@storybook/react";
import { StoryFn } from "@storybook/react";

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
  decorators: [
    (Story: StoryFn) => (
      <div className="theme-dark">
        <Story />
      </div>
    ),
  ],
};

export default preview;
