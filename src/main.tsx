import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)

if (container.innerHTML === '<!--app-html-->' || container.innerHTML === '') {
  createRoot(container).render(app)
} else {
  hydrateRoot(container, app)
}
