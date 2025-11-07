import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: './',  // 👈 IMPORTANT pour les hébergeurs (Infomaniak, OVH, FTP simple)
  plugins: [
    vue(),
    svgLoader(), // allows: import Logo from '@/assets/logo.svg'
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
