import './header.scss';
import { useState } from "react";

const Header = () => {
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
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#about">sobre</a>
        </li>
        <li>
          <a href="#">projetos</a>
        </li>
        <li>
          <a href="#">contato</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
