import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { IdiomaProvider } from './i18n/IdiomaProvider.tsx'
import './index.css'

const raiz = document.getElementById('root')
if (!raiz) throw new Error('No se encontró el elemento #root en index.html')

createRoot(raiz).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
)
