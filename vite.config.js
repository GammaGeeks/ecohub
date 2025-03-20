import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // The output folder for the build
    assetsDir: 'assets', // Folder for static assets (like images)
  },
})
