import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '32f7-2405-9800-b660-5f57-91f0-9d22-a1e1-6738.ngrok-free.app',
    ],
    port: 3120,
  },
  plugins: [react()],
});
