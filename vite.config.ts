import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use '/' for custom domain (ixc.ua). A path base like '/repo-name/' is only for GitHub Pages project URLs (username.github.io/repo-name/).
export default defineConfig({
  plugins: [react()],
  base: '/'
})
