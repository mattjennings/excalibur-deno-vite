import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/web',
  },
  plugins: [deno()],
})
