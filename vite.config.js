import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    allowedHosts: [
      'hairrush.diecode.lat',
      '.railway.app',
      'localhost'
    ],
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})