import React from 'react';
import '../src/global.css';

import type { Preview } from '@storybook/react';
import { StoryFn } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <>
        <div className="theme-dark">
          <h3>Theme Dark</h3>
          <Story />
        </div>

        <br />
        <hr />
        <br />

        <div className="theme-light">
          <h3>Theme Light</h3>
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
