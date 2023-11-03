import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
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
      { find: '@consts', replacement: '/src/consts' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@tests', replacement: '/src/tests' },
      { find: '@mocks', replacement: '/src/mocks' },
    ],
  },
});
