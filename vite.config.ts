import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import node from 'vite-plugin-node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* base: '/Portfolio', */
  resolve: {
    alias: [{find : "@", replacement: path.resolve(__dirname, 'src')}]
  }
})
