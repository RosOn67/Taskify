import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from "node:path"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true, // Optional: Treat SVGs as icons
    },
  }), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),//-
    },
  },
  build: {
    sourcemap: true,
  }
})
