import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// import.meta.dirname statt __dirname: Vite 8 warnt, dass __dirname vom
// kuenftigen Standard-Config-Loader ('native') nicht mehr unterstuetzt wird.
// Diese Datei ist ESM ("type": "module"), __dirname funktionierte bisher nur,
// weil Vite die Konfiguration vorher nach CJS umschreibt. Mit dem nativen
// Loader waere es ein Laufzeitfehler beim Build — jetzt statt beim naechsten
// Major.
const dirname = import.meta.dirname

// `appName` und `appVersion` sind globale Bezeichner, die @nextcloud/vue liest
// (dist/chunks/appName.mjs) — ohne Ersetzung protokolliert die Bibliothek einen
// Fehler. Beide standen hier bis 09/2026 als Literal: der Name in Grossbuchstaben
// und die Version fest auf '0.1.0'.
//
// Der Name muss die APP-ID sein, nicht ein Anzeigename: `useLocalizedAppName()`
// sucht damit in der App-Liste (`apps.find(({ id }) => id === appName)`) und fand
// mit 'RECHNUNGSWERK' nie etwas — der uebersetzte Anzeigename liess sich also gar
// nicht aufloesen.
//
// Die Version kommt aus `appinfo/info.xml`, der fuehrenden Quelle beim Release
// (package.json traegt seit v0.4.0 unveraendert 0.1.5 und wird nicht gepflegt).
// Damit stimmt sie kuenftig von selbst; NcAppSettingsDialog zeigt sie als
// "<Name> <Version>" an.
const appName = JSON.parse(readFileSync(resolve(dirname, 'package.json'), 'utf8')).name
const appVersion = readFileSync(resolve(dirname, 'appinfo/info.xml'), 'utf8')
  .match(/<version>([^<]+)<\/version>/)?.[1]
if (!appVersion) {
  throw new Error('vite.config.js: <version> nicht in appinfo/info.xml gefunden')
}

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
    appName: JSON.stringify(appName),
    appVersion: JSON.stringify(appVersion),
  },
  resolve: {
    alias: {
      vue: resolve(dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      '@': resolve(dirname, 'src'),
    },
    dedupe: ['vue'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // ES-Modul statt iife (#221).
    //
    // Anlass: @nextcloud/dialogs laedt seinen FilePicker per dynamischem Import.
    // Das erzwingt Code-Splitting, und iife kann das nicht — der Build brach mit
    // INVALID_OPTION ab. Weder `codeSplitting: false` noch `inlineDynamicImports`
    // half; nachgewiesen mit einem Debug-Plugin, dass der Bundler bei EINEM
    // Eintrag genau `{format:"iife", codeSplitting:false}` erhielt und trotzdem
    // ablehnte.
    //
    // Die offizielle Nextcloud-Vite-Konfiguration (@nextcloud/vite-config) liefert
    // ohnehin `.mjs` mit Chunks aus. Das einzelne iife-Bundle war der Sonderfall,
    // weshalb dieses Problem uns traf und offizielle Apps nicht. Nextclouds
    // Skript-Aufloesung bevorzugt `.mjs` von sich aus
    // (JSResourceLocator::appendScriptIfExist: "Try to find ES6 script file
    // (.mjs) with fallback to plain javascript (.js)"), deshalb bleibt
    // templates/index.php mit Util::addScript(...) unveraendert.
    lib: {
      entry: resolve(dirname, 'src/main.js'),
      name: 'rechnungswerk',
      formats: ['es'],
      fileName: () => 'js/rechnungswerk-main.mjs',
    },
    rollupOptions: {
      output: {
        // Chunks mit Inhalts-Hash. Der Hash ist kein Selbstzweck: Chunks werden
        // vom Modullader ohne NCs `?v=`-Parameter geholt, ein gleichnamiger
        // Chunk kaeme nach einem Update aus dem Browser-Cache. Dass dabei alte
        // Dateien liegenbleiben, raeumt CleanupExtraFiles auf — der Schritt
        // deckt jetzt js/ mit ab, nicht mehr nur vendor/.
        chunkFileNames: 'js/[name]-[hash].chunk.mjs',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/rechnungswerk-main.css'
          }
          return 'css/[name][extname]'
        },
      },
    },
  },
}))
