import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    // allowedHosts: [
    //   '32f7-2405-9800-b660-5f57-91f0-9d22-a1e1-6738.ngrok-free.app',
    // ],
    port: 3120,
  },
  preview: {
    port: 3120, // ใช้พอร์ตนี้ตอน preview หลังจาก build
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // อัปเดต Service Worker อัตโนมัติ
      manifest: {
        name: 'My Business Card',
        short_name: 'MyCard',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          { src: '/c_logo.png', sizes: '180x180', type: 'image/png' },
          { src: '/c_t1.png', sizes: '192x192', type: 'image/png' },
          { src: '/c_t2.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'StaleWhileRevalidate', // ใช้แคชก่อน แล้วดึงข้อมูลใหม่
            options: {
              cacheName: 'pages-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst', // โหลดจากแคชก่อน ถ้าไม่มีค่อยโหลดใหม่
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 604800 },
            },
          },
          {
            urlPattern: ({ url }) => url.origin.includes('api.example.com'),
            handler: 'NetworkFirst', // ใช้เครือข่ายก่อน ถ้าไม่มีเน็ตค่อยใช้แคช
            options: {
              cacheName: 'api-cache',
              expiration: { maxEntries: 30, maxAgeSeconds: 300 },
            },
          },
        ],
      },
    }),
  ],
});
