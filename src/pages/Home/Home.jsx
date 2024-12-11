import React from "react";
import { useTranslation } from 'react-i18next'; // Importa el hook
import "./Home.css"; // Importar el archivo CSS
import perfilImage from "../../assets/perfilName.jpeg";
import Linkedin from "../../components/Linkedin.jsx";
import Github from "../../components/Github.jsx";
import Whatsapp from "../../components/Whatsapp.jsx";

const Home = () => {
  const { t } = useTranslation(); // Obtén la función t() para traducir

  return (
    <section className="section-container">
      <div className="home" data-aos="flip-down">
        <div className="home-container">
          <div className="home-principal">
            <div className="home-image">
              <img
                src={perfilImage} // Cambia esta ruta a la imagen que quieras usar
                alt={t('home.profileAltText')}
              />
            </div>
            <div>
              <h1 className="home-title">
                {t('home.greeting')} <span className="highlight">{t('home.name')}</span>
              </h1>
              <p className="home-description">{t('home.description')}</p>
              <div className="icons">
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/nahuel-arga%C3%B1araz/"
                >
                  <Linkedin />
                </a>
                <a
                  className="icon"
                  href="https://github.com/NahuelArg"
                >
                  <Github />
                </a>
                <a
                  className="icon"
                  href="https://wa.me/qr/SKAVVYZHLGJEB1"
                >
                  <Whatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className="home-buttons">
            <a href="#projects" className="home-button home-button-blue">
              {t('home.viewProjects')}
            </a>
            <a href="#contact" className="home-button home-button-green">
              {t('home.contactMe')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
