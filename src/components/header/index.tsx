import './header.scss';
import { useState } from "react";

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

  // const setOpenedState = () => {
  //   let reverseOpened = menuOpen;

  //   setMenuOpen(!reverseOpened);
  // }

  return (
    <header className='header-container'>
      <h2 className='header-container__logo'>MARCELO CABRAL</h2>
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
        <li onClick={() => scrollToSection(refs.homeRef)}>início</li>
        <li onClick={() => scrollToSection(refs.aboutRef)}>sobre</li>
        <li onClick={() => scrollToSection(refs.projectsRef)}>projetos</li>
        <li onClick={() => scrollToSection(refs.contactRef)}>contato</li>
      </ul>
    </header>
  );
};

export default Header;
