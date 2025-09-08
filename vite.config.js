import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // <-- change this to '/<repo-name>/' or '/' if your repo is username.github.io
  plugins: [react()],
})
