import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '18.140.121.108',
    port: 3120,
  },
  plugins: [react()],
});
