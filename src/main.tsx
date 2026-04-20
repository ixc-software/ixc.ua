import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'

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
const app = (
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
)

if (container.innerHTML === '<!--app-html-->' || container.innerHTML === '') {
  createRoot(container).render(app)
} else {
  hydrateRoot(container, app)
}
