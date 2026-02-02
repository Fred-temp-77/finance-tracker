import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/Fred-temp-77/finance-tracker.git',
  plugins: [tailwindcss(), react()],
})
