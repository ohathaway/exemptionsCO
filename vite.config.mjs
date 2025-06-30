import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import yaml from 'js-yaml'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    {
      name: 'yaml',
      transform(code, id) {
        if (id.endsWith('.yaml') || id.endsWith('.yml')) {
          return `export default ${JSON.stringify(yaml.load(code))}`
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})