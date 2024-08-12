import { useRef } from 'react';
import './App.scss'
import Footer from './components/footer';
// import { useTranslation } from 'react-i18next'
import Header from './components/header';
import About from './components/portfolio-content/about';
import Contact from './components/portfolio-content/contact';
import Home from './components/portfolio-content/home';
import Projects from './components/portfolio-content/projects';

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  // const { t, i18n } = useTranslation();

  return (

    <>
      <Header 
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef}}
      ></Header>
      {/* <Home ref={homeRef}></Home> */}
      <Home scrollToProjects={() => scrollToSection(projectsRef)} ref={homeRef}></Home>
      <About scrollToContact={() => scrollToSection(contactRef)} ref={aboutRef}></About>
      <Projects ref={projectsRef}></Projects>
      <Contact ref={contactRef}></Contact>
      <Footer></Footer>
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
