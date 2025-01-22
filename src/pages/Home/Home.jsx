import React from "react";

import { useTranslation } from 'react-i18next';
import Linkedin from "../../components/Linkedin.jsx";
import Github from "../../components/Github.jsx";
import Whatsapp from "../../components/Whatsapp.jsx";
import "./Home.css"; // Importar el archivo CSS para Home
import PerfilImage from  '../../../public/PerfilImage.png'
import Navbar from "../../components/NavBar/NavBar.jsx";


const Home = () => {
  const { t } = useTranslation(); // Obtener traducciones
  

  return (
    <section className="section-container">
      {/* Componente Navbar con la lógica de visibilidad */}
      <Navbar />

      {/* Contenido principal de la página */}
      <div className="home" data-aos="flip-down">
        <div className="home-container">
          <div className="home-principal">
            <div className="home-image">
              <img
                
                src={PerfilImage}
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
                  href="https://wa.me/qr/SKAVVYZHLGJJEB1"
                >
                  <Whatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
