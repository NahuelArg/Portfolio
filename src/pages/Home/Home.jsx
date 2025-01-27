import React from "react";
import { useTranslation } from 'react-i18next';
import Linkedin from "../../components/Linkedin.jsx";
import Github from "../../components/Github.jsx";
import Whatsapp from "../../components/Whatsapp.jsx";
import "./Home.css"; // Importar el archivo CSS para Home
import PerfilImage from '../../../public/PerfilImage.png';
import About from '../About/About.jsx';

const Home = () => {
  const { t } = useTranslation(); // Obtener traducciones

  return (
    <section className="home-container">
      <div className="home-content">
        <div className="home-image">
          <img
            src={PerfilImage}
            alt={t('home.profileAltText')}
          />
        </div>
        <div className="home-text">
          <h1 className="home-title">
            {t('home.greeting')} <span className="highlight">{t('home.name')}</span>
          </h1>
          <p className="home-description">{t('home.description')}</p>
          <div className="home-icons">
            <a
              className="icon"
              href="https://www.linkedin.com/in/nahuel-arga%C3%B1araz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              className="icon"
              href="https://github.com/NahuelArg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              className="icon"
              href="https://wa.me/qr/SKAVVYZHLGJJEB1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
            </a>
          </div>
          <div className="home-about">
            <About>{t('home.downloadCV')}</About>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
