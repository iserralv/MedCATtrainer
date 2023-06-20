import { createVuePlugin as vue } from "vite-plugin-vue2";
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: 'vue/dist/vue.esm.js'
    },
  },
  build: {
    sourcemap: true,
    assetsDir: 'static'
  },
  server: {
    proxy: {
      '^/api/concepts/*': {
        target: 'http://localhost:8983/solr',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/\/api\/concepts/, '/')
      },
      '^/api/*': {
        target: 'http://localhost:8001'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_common.scss";
          @import "./src/styles/_tabs.scss";
        `
      }
    }
  }
})
