import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This defines a global 'process.env' to prevent the blank screen crash
    'process.env': {}
  }
})