import { PassThrough } from 'node:stream'
import { StrictMode, Suspense } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { ThemeProvider } from './ThemeProvider'
import { LanguageProvider } from './i18n/LanguageProvider'
import { languageFromPath } from './i18n/localePath'
import { loadTranslations } from './i18n/loadLocale'

export async function render(url = '/') {
  const location = `${import.meta.env.BASE_URL}${url.startsWith('/') ? url.slice(1) : url}`
  await loadTranslations(languageFromPath(location))

  const app = (
    <StrictMode>
      <ThemeProvider>
        <StaticRouter location={location} basename={import.meta.env.BASE_URL}>
          <Suspense fallback={null}>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </Suspense>
        </StaticRouter>
      </ThemeProvider>
    </StrictMode>
  )

  return new Promise<string>((resolve, reject) => {
    let html = ''
    let settled = false
    const finish = (fn: () => void) => {
      if (settled) return
      settled = true
      fn()
    }
    const { pipe, abort } = renderToPipeableStream(app, {
      onAllReady() {
        const pass = new PassThrough()
        pass.on('data', (chunk) => {
          html += chunk.toString()
        })
        pass.on('end', () => finish(() => resolve(html)))
        pass.on('error', (err) => finish(() => reject(err)))
        pipe(pass)
      },
      onShellError(err) {
        finish(() => reject(err))
      },
      onError(err) {
        console.error(err)
      },
    })
    setTimeout(() => {
      abort()
      finish(() => reject(new Error(`Prerender timed out for ${url}`)))
    }, 20000)
  })
}
