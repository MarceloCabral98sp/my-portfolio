import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import i18n from './i18n/index.ts';
import { DarkModeProvider } from './context/darkmode-context.tsx';
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById('root');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <DarkModeProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </DarkModeProvider>
    </React.StrictMode>
  )
} else {
  console.log('Root element not found!');
}