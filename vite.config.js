import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // OK si ton repo est allatchimi.github.io
  plugins: [
    react(),
    tailwindcss(),

  ],
})



