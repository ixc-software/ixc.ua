import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'

export function render(url = '/') {
  const html = renderToString(
    <StrictMode>
      <ThemeProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    </StrictMode>
  )
  return html
}
