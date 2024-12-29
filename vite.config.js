import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* eslint-disable no-undef */
  base: process.env.NODE_ENV === 'production' ? '' : '/',
  /* eslint-enable no-undef */
})