import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //   server: {
  //   port: ,   // 👈 change to any port you want
  //   open: true    // optional: auto-open browser
  // }
})
