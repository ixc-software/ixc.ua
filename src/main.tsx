import { StrictMode, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import { languageFromPath } from './i18n/localePath'
import { loadTranslations } from './i18n/loadLocale'

/** WebKit (esp. iOS): returning from another tab after opening an external link can leave the page non-scrollable. */
function installScrollRestoreAfterLeavingTab() {
  const nudgeScrollPosition = () => {
    const x = window.scrollX
    const y = window.scrollY
    window.scrollTo(x, y)
  }
  window.addEventListener(
    'pageshow',
    (e: PageTransitionEvent) => {
      if (e.persisted) requestAnimationFrame(nudgeScrollPosition)
    },
    false
  )
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') requestAnimationFrame(nudgeScrollPosition)
  })
}

installScrollRestoreAfterLeavingTab()

const container = document.getElementById('root')!

async function boot() {
  await loadTranslations(languageFromPath(window.location.pathname))
  const app = (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={null}>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  )

  if (container.innerHTML === '<!--app-html-->' || container.innerHTML === '') {
    createRoot(container).render(app)
  } else {
    hydrateRoot(container, app)
  }
}

void boot()
