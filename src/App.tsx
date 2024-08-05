import './App.css'
// import { useTranslation } from 'react-i18next'
import Header from './components/header';
import Home from './components/portfolio-content/home';

function App() {

  // const { t, i18n } = useTranslation();

  return (

    <>
      <Header></Header>
      <Home></Home>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cum? Perferendis tenetur pariatur, quia delectus labore ab perspiciatis doloremque itaque provident harum cumque incidunt ea? Ratione maiores adipisci ex qui incidunt nesciunt reiciendis tempore? Nihil distinctio, minus quidem repellat harum illum quod sed amet vero esse quisquam dolores dolorem nesciunt! Voluptatem vitae harum nobis similique voluptate dolore placeat excepturi numquam ipsam repellat cumque dolorum atque non debitis est, asperiores veritatis molestiae soluta sapiente? Eius esse, fugiat odio modi vel veritatis cum accusantium molestias atque id, ratione rerum officiis pariatur sequi? Fugiat cum harum aliquid inventore voluptates deserunt mollitia consequatur ducimus!
      </p>
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
