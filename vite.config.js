import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  define: {
    // Vue, Pinia und Vue Router werden als esm-bundler-Builds eingebunden. Die
    // setzen voraus, dass der Bundler process.env.NODE_ENV ersetzt, und liefern
    // bewusst keine eigene Definition mit. Im Library-Modus nimmt Vite das nicht
    // automatisch vor, und ein pauschales 'process.env': {} liess NODE_ENV als
    // undefined durchlaufen — womit Vue im Entwicklungspfad blieb und Warnungen,
    // Prop-Typpruefungen und Hydration-Diagnosen im Produktionsbundle landeten.
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development'),
    // Auffangnetz fuer andere process.env.*-Zugriffe; greift erst nach der
    // spezifischeren Ersetzung oben, da Vite laengere Schluessel zuerst anwendet.
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
}))
