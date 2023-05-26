import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Set it to `true` to export React component as default.
      // Notice that it will override the default behavior of Vite.
      // This avoid to use repeated:
      //      import { ReactComponent as Logo } from "./logo.svg"; instead
      //      import Logo from "./logo.svg";
      exportAsDefault: true,
    }),
  ],
});
