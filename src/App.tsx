import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about/index';
import Contact from './components/contact/index';
import Home from './components/home/index';
import Projects from './components/projects/index';
import { useRef } from 'react';
import { useDarkMode } from './context/darkmode-context';

const App = () => {
  const  { darkMode } = useDarkMode();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  return (
    <div className={ darkMode ? 'dark-mode' : 'light-mode' }>
      <Header 
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef}}
      />
      <Home scrollToProjects={() => scrollToSection(projectsRef)} ref={homeRef} />
      <About scrollToContact={() => scrollToSection(contactRef)} ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default App;