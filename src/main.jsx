import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import GridBackground from './siteComponents/ui/gridBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GridBackground>
    <App />
    </GridBackground>
    </BrowserRouter>
  </StrictMode>,
)
