import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes to prerender for SEO
const routes = [
  '/',
  '/about-us',
  '/products/softswitch',
  '/products/white-black-list',
  '/products/monitoring-tool',
  '/products/ixc-autotester',
  '/products/sms-platform',
  '/products/google-api',
]

for (const route of routes) {
  const appHtml = render(route)
  const html = template.replace(`<!--app-html-->`, appHtml)

  // Map route to file path
  const filePath = route === '/'
    ? 'dist/index.html'
    : `dist${route}/index.html`

  const dirPath = path.dirname(toAbsolute(filePath))
  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(toAbsolute(filePath), html)
  console.log(`Prerendered: ${route} → ${filePath}`)
}

console.log('Prerender completed successfully.')
