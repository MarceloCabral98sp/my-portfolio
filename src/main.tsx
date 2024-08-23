import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

import './i18n/index.ts'
import { DarkModeProvider } from './context/darkmode-context.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
