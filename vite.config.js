import { defineConfig } from 'vite'

export default defineConfig({
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