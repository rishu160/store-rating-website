import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/store-rating-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
