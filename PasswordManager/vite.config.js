import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // this tells Vite to look in the root directory for index.html
  build: {
    outDir: 'dist'
  }
})
