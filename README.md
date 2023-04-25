# Massa React TS ui-kit

Tech:

- React typescript
- tailwind

## Presentation

The shareable preset our in the `presets` directory.

## How to use it?

- `npm install @massalabs/react-ui-kit -D`
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

- use the components:

```ts
import { Amount } from "@massalabs/react-ui-kit";
```

## Contribute

You can add global CSS in `src/index.css`.
