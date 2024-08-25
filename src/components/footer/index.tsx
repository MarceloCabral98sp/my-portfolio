import './footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation(); 

    const currentYear = new Date().getFullYear();

    return (
        <section className="footer-section">
            <div className="footer-section__links">
                <div className="footer-section__links-icon">
                    <a href="https://github.com/MarceloCabral98sp">
                        <img src="src/assets/icons/github-svgrepo-com.svg" alt={ t('pages.footer.icons-description.github')} />
                    </a>
                </div>
                <div className="footer-section__links-icon">
                <a href="https://www.linkedin.com/in/marcelo-cabral-72228416a/">
                    <img src="src/assets/icons/linkedin-svgrepo-com.svg" alt={ t('pages.footer.icons-description.linkedin')} />
                </a>
                </div>
                <div className="footer-section__links-icon">
                    <a href="https://www.youtube.com/@marcelocabral463">
                        <img src="src/assets/icons/youtube-svgrepo-com.svg" alt={ t('pages.footer.icons-description.youtube')} />
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