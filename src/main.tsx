import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import i18n from './i18n/index.ts';
import { DarkModeProvider } from './context/darkmode-context.tsx';
import { I18nextProvider } from 'react-i18next';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const trackingId = 'G-5QQR4RZVT0';

ReactGA.initialize(trackingId);
ReactGA.send('pageview');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <DarkModeProvider>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </DarkModeProvider>
      </React.StrictMode>
    </BrowserRouter>
  )
} else {
  console.log('Root element not found!');
}