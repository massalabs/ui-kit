# Massa React TS ui-kit

Tech:

- React typescript
- tailwind

## How to use it?

- `npm install @massalabs/react-ui-kit`
- update your tailwind configuration file `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@massalabs/react-ui-kit/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@massalabs/react-ui-kit/presets/massa-station-preset.js")],
};
```

- update your `vite.config.ts` file:

```typescript
export default ({ mode }) => {
  ...
  return defineConfig({
    ...
    optimizeDeps: {
      include: ['react-dom', 'dot-object', 'copy-to-clipboard'],
    },
```

- import the global css in you main tsx file (`main.tsx` or `App.tsx`):

```ts
import "@massalabs/react-ui-kit/src/global.css";
```

- use the components:

```ts
import { Amount } from "@massalabs/react-ui-kit";
```

## Contribute

You can add global CSS in `src/global.css`.

### How to clean code

- use tailwind alias to avoid long `className` string
- create react function component: `export function PrimaryButton(props: PrimaryButtonProps) {}`
  - or `export const PrimaryButton = (props: PrimaryButtonProps) => {}`
- create one folder per component with
  - component
  - unit tests
  - storybook stories

### Theme

To apply a theme, use the class `theme-light` or `theme-dark`. All nested elements will apply the theme.

See <https://github.com/L-Blondy/tw-colors#nested-themes> for details.

Massa's design system color palette in implemented in `presets/massa-station-preset.js` thanks to `tw-colors` plugin.

You can now use our custom colors thanks to `className`:

- `<p className="bg-primary"></p>`
- `<p className="text-neutral"></p>`

#### Create your own theme

You can create your own theme by creating a new file in the `presets` directory.

Copy this file <https://github.com/massalabs/ui-kit/blob/main/presets/massa-station-preset.js>.

Update the `tailwind.config.js` file to use your new theme to change preset:

```js
  presets: [require('./src/themes/preset.js')],
```

### Typography

All typographies are defined in the tailwind preset.

To use them, simple add the name of the typography in the `className` prefixed by `mas-`:

`<h1 className="mas-banner">My title</h1>`

### Icons

Icons are imported via the react-icons library
See <https://react-icons.github.io/react-icons/> for details & <https://github.com/react-icons/react-icons> for specific use cases
