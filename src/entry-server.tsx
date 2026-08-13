import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'

export function render(url = '/') {
  const html = renderToString(
    <StrictMode>
      <ThemeProvider>
        <StaticRouter location={`${import.meta.env.BASE_URL}${url.startsWith('/') ? url.slice(1) : url}`} basename={import.meta.env.BASE_URL}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </StaticRouter>
      </ThemeProvider>
    </StrictMode>
  )
  return html
}
