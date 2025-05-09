
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
   plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 10000,
  },
  preview: {
     plugins: [react()],
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 10000,
    allowedHosts: ['.onrender.com'], // Allow all Render subdomains
  },
    esbuild: {
    target: 'esnext',
    platform: 'linux',
  }
});
