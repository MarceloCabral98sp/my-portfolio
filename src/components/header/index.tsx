import { useDarkMode } from '../../context/darkmode-context';
import './header.scss';
import { RefObject, useState } from "react";

type HeaderProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
};

const Header: React.FC<HeaderProps> = ({ scrollToSection, refs}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const darkPath: string = 'src/assets/icons/moon.png';
  const lightPath: string = 'src/assets/icons/sun.png';


  const navigateToSection = (section: RefObject<HTMLDivElement>) => {
    scrollToSection(section)
    setMenuOpen(false);
  }

  return (
    <header className='header-container'>
      <h2 className='header-container__logo'>MARCELO CABRAL</h2>

      <div className='header-container__light-dark-icons' onClick={toggleDarkMode}>
          <img className={darkMode ? 'white-icon' : '' } src={!darkMode ? darkPath : lightPath} alt="Ícone para selecionar modo constraste" />
      </div>

      <div
        className={`mobile-menu ${menuOpen? 'open': ''}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => navigateToSection(refs.homeRef)}>início</li>
        <li onClick={() => navigateToSection(refs.aboutRef)}>sobre</li>
        <li onClick={() => navigateToSection(refs.projectsRef)}>projetos</li>
        <li onClick={() => navigateToSection(refs.contactRef)}>contato</li>
      </ul>
    </header>
  );
};

export default Header;
