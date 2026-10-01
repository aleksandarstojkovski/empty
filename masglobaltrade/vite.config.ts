import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Blog posts, reviews and lead submissions come from the same backend
// endpoints the original site uses (/api/*).
const api = {
  '/api': { target: 'https://masglobaltrade.ch', changeOrigin: true, secure: true },
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { proxy: api },
  preview: { proxy: api },
})
