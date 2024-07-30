import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './app'
// tailwind css
import './global.css'
// https://github.com/vbenjs/vite-plugin-svg-icons?tab=readme-ov-file#usage
import 'virtual:svg-icons-register'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense>
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>,
)
