import './header.scss';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from '../../context/darkmode-context';
import React, { RefObject, useState } from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

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

  const { t, i18n } = useTranslation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const darkIconPath: string = 'assets/icons/moon.png';
  const lightIconPath: string = 'assets/icons/sun.png';
  const ptFlagPath: string = "https://flagsapi.com/BR/flat/24.png/";
  const usFlagPath: string = "https://flagsapi.com/US/flat/24.png/";

  const navigateToSection = (section: RefObject<HTMLDivElement>, sectionName: string, path: string) => {

    ReactGA.event({
      'category': 'Navigation',
      'action': 'Click',
      'label': sectionName
    });

    scrollToSection(section);
    navigate(path, { replace: true});
    setMenuOpen(false);
  }

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  }

  const chooseLanguage = (selectedLanguage: string) => { 
    i18n.changeLanguage(selectedLanguage);
    setLanguageDropdownOpen(false);
  }

  
  return (
    <header className="header-section">
      <h2 className="header-section__logo">
        <a href="/">Marcelo Cabral</a>
      </h2>

      <div className="header-menu">

        <div className="header-menu__darkmode-container" onClick={ toggleDarkMode }>
          <div className="header-menu__darkmode-icons">
            <img className={darkMode ? 'white-icon' : '' } src={!darkMode ? darkIconPath : lightIconPath} alt={ t('pages.header.icon-description')} />
          </div>
        </div>

        <nav className={`header-menu__header-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => navigateToSection(refs.homeRef, 'Header - Home', '/')}>{ t('pages.header.home')}</li>
            <li onClick={() => navigateToSection(refs.aboutRef, 'Header - About', '/about')}>{ t('pages.header.about')}</li>
            <li onClick={() => navigateToSection(refs.projectsRef, 'Header - Projects', '/projects')}>{ t('pages.header.projects')}</li>
            <li onClick={() => navigateToSection(refs.contactRef, 'Header - Contact', '/contact')}>{ t('pages.header.contact')}</li>
            
            <li className="header-menu__header-links--language-dropdown-menu">
              <button className="desktop-nav__button" onClick={toggleLanguageDropdown}>
                <img src={i18n.language === 'pt-BR' ? ptFlagPath: usFlagPath} alt="Language Flag" />
                {i18n.language.toUpperCase()}
              </button>
              {languageDropdownOpen && (
                <ul className="language-dropdown__options">
                  <li className='language-dropdown__options-option' onClick={() => chooseLanguage('pt-BR')}>
                    <img src="https://flagsapi.com/BR/flat/24.png" alt="Brazil Flag" /> Português
                  </li>
                  <li className='language-dropdown__options-option' onClick={() => chooseLanguage('en-US')}>
                    <img src="https://flagsapi.com/US/flat/24.png" alt="USA Flag" /> English
                  </li>
                </ul>
              )}
            </li>            
          </ul>
        </nav>

        <div className="mobile-menu">
          <div
            className={`mobile-menu__burger ${menuOpen? 'open': ''}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      { menuOpen && (
        <nav className='mobile-nav'>
          <ul>
            <li onClick={() => navigateToSection(refs.homeRef, 'Header - Home', '/')}>{ t('pages.header.home')}</li>
            <li onClick={() => navigateToSection(refs.aboutRef, 'Header - About', '/about')}>{ t('pages.header.about')}</li>
            <li onClick={() => navigateToSection(refs.projectsRef, 'Header - Projects', '/projects')}>{ t('pages.header.projects')}</li>
            <li onClick={() => navigateToSection(refs.contactRef, 'Header - Contact', 'contact')}>{ t('pages.header.contact')}</li>
            <li>
              <button className="mobile-nav__button" onClick={toggleLanguageDropdown}>
                <img src={i18n.language === 'pt-BR' ? ptFlagPath: usFlagPath} alt="Language Flag" />
                {i18n.language.toUpperCase()}
              </button>
              {languageDropdownOpen && (
                <ul className="mobile-nav__language-dropdown">
                  <li onClick={() => chooseLanguage('pt-BR')}>
                    <img src="https://flagsapi.com/BR/flat/24.png" alt="Brazil Flag" /> Português
                  </li>
                  <li onClick={() => chooseLanguage('en-US')}>
                    <img src="https://flagsapi.com/US/flat/24.png" alt="USA Flag" /> English
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;