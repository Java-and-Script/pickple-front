import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          router: ['react-router-dom'],
          dom: ['react-dom'],
          style: ['@emotion/react', '@emotion/styled'],
          fetch: ['axios'],
          state: ['@tanstack/react-query', 'zustand'],
          map: ['react-kakao-maps-sdk'],
          socket: ['sockjs-client', 'stompjs'],
          form: ['react-hook-form'],
          ui: [
            'react-hot-toast',
            'react-draggable-bottom-sheet',
            'react-calendar',
          ],
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@api', replacement: '/src/api' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@stores', replacement: '/src/stores' },
      { find: '@contexts', replacement: '/src/contexts' },
      { find: '@type', replacement: '/src/type' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@tests', replacement: '/src/tests' },
      { find: '@mocks', replacement: '/src/mocks' },
    ],
  },
  define: {
    global: 'window',
  },
});
