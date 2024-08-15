import './footer.scss';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <section className="footer-section">
            <div className="footer-section__container">
                <div className="footer-section__icons">
                    <a href="https://github.com/MarceloCabral98sp">
                        <img src="src/assets/icons/github-svgrepo-com.svg" alt="Ícone do github" />
                    </a>
                </div>
                <div className="footer-section__icons">
                <a href="https://www.linkedin.com/in/marcelo-cabral-72228416a/">
                    <img src="src/assets/icons/linkedin-svgrepo-com.svg" alt="Ícone do linkedin" />
                </a>
                </div>
                <div className="footer-section__icons">
                    <a href="https://www.youtube.com/@marcelocabral463">
                        <img src="src/assets/icons/youtube-svgrepo-com.svg" alt="Ícone do youtube" />
                    </a>
                </div>
            </div>
            <div className='footer-section__copyright'>
                <p>&copy; Copyright {currentYear}. Made by <a href="#"><strong>Marcelo Cabral</strong></a></p>
            </div>
        </section>
    )
}

export default Footer;