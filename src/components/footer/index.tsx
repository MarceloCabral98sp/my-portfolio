import "./footer.scss";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const trackLinkClick = (link: string) => {
    ReactGA.event({
      category: "Footer Links",
      action: "Click",
      label: `Clicked ${link} Link`,
    });
  };

  return (
    <section className="footer-section">
      <div className="footer-section__links">
        <div className="footer-section__links-icon">
          <a
            href="https://github.com/MarceloCabral98sp"
            onClick={() => trackLinkClick("GitHub")}
          >
            <img
              src="/assets/icons/github-svgrepo-com.svg"
              alt={t("pages.footer.icons-description.github")}
            />
          </a>
        </div>
        <div className="footer-section__links-icon">
          <a
            href="https://www.linkedin.com/in/marcelo-cabral-72228416a/"
            onClick={() => trackLinkClick("Linkedin")}
          >
            <img
              src="/assets/icons/linkedin-svgrepo-com.svg"
              alt={t("pages.footer.icons-description.linkedin")}
            />
          </a>
        </div>
        <div className="footer-section__links-icon">
          <a
            href="https://www.youtube.com/@marcelocabral463"
            onClick={() => trackLinkClick("Youtube")}
          >
            <img
              src="/assets/icons/youtube-svgrepo-com.svg"
              alt={t("pages.footer.icons-description.youtube")}
            />
          </a>
        </div>
      </div>
      <div className="footer-section__copyright">
        <p>
          &copy; Copyright {currentYear}. Made by{" "}
          <a href="/">
            <strong>Marcelo Cabral</strong>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
