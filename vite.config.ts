import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/somfai-hu/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
});