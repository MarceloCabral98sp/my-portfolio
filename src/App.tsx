import './App.css'
import { useTranslation } from 'react-i18next'

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <h1 className="home-title">{ t('pages.home.title')}</h1>

      <div className="home-button">
        <button onClick={() => i18n.changeLanguage('en-US')}>Inglês</button>
        <button onClick={() => i18n.changeLanguage('pt-BR')}>Portugues</button>
      </div>
    </div>
  )
}

export default App
