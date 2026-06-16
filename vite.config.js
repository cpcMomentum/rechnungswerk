import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false,
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
    'appName': JSON.stringify('RECHNUNGSWERK'),
    'appVersion': JSON.stringify('0.1.0'),
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      '@': resolve(__dirname, 'src'),
    },
    dedupe: ['vue'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'rechnungswerk',
      formats: ['iife'],
      fileName: () => 'js/rechnungswerk-main.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/rechnungswerk-main.css'
          }
          return 'css/[name][extname]'
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
