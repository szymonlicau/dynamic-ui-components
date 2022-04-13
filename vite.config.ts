import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    target: 'es2015'
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/stylesheets/mixins/responsive';"
      }
    }
  },

  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    }
  }
})
