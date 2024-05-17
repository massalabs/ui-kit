import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default ({ mode }) => {
  // loadEnv(mode, process.cwd()) will load the .env files depending on the mode
  // import.meta.env.VITE_BASE_APP available here with: process.env.VITE_BASE_APP
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
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
    optimizeDeps: {
      include: ['react-dom', 'dot-object', 'copy-to-clipboard'],
    },
  });
};
