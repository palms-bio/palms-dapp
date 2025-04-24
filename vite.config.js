import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          starknet: ['starknet', '@starknet-react/core', '@starknet-react/chains']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
})
