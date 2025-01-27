import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook
import './About.css';

const About = () => {
  const { t } = useTranslation(); // Obtén la función t() para traducir

  return (
    <section id="about" className="about">
      <h2 className="about-title">{t('about.title')}</h2>
      <p className="about-description">
        {t('about.description')}
      </p>
    </section>
  );
};

export default About;
