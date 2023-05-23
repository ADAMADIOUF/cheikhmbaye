
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
import enTranslations from './locales/en.json'
import frTranslations from './locales/fr.json'

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
    // Add more languages as needed
  },
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
