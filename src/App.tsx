import './App.css'
// import { useTranslation } from 'react-i18next'
import Header from './components/header';
import About from './components/portfolio-content/about';
import Home from './components/portfolio-content/home';

function App() {

  // const { t, i18n } = useTranslation();

  return (

    <>
      <Header></Header>
      <Home></Home>
      <About></About>
    </>
    // <div className="home">
    //   <h1 className="home-title">{ t('pages.home.title')}</h1>

    //   <div className="home-button">
    //     <button onClick={() => i18n.changeLanguage('en-US')}>Inglês</button>
    //     <button onClick={() => i18n.changeLanguage('pt-BR')}>Portugues</button>
    //   </div>
    // </div>
  )
}

export default App;
