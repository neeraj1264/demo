// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      platform: 'browser'  // Change from 'linux' to 'browser'
    },
  },
});
