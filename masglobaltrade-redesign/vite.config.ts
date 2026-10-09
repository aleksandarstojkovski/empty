import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// Blog posts, reviews and lead submissions come from the live site's backend.
const api = {
  '/api': { target: 'https://masglobaltrade.ch', changeOrigin: true, secure: true },
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Same images, fonts and site files as the pixel-perfect clone.
  publicDir: fileURLToPath(new URL('../masglobaltrade/public', import.meta.url)),
  resolve: {
    alias: { '@clone': fileURLToPath(new URL('../masglobaltrade/src', import.meta.url)) },
    // The clone's files must use this app's single copy of these packages.
    dedupe: ['react', 'react-dom', 'wouter', 'framer-motion'],
  },
  server: { proxy: api },
  preview: { proxy: api },
})
