import React from "react";
import { useTranslation } from 'react-i18next'; // Importa el hook
import "./Projects.css";
import gym from "../../../public/software para gimnasios.jpg";
import nina from "../../assets/nina.png";
const Projects = () => {
  const { t } = useTranslation(); // Obtén la función t() para traducir

  return (
    <section id="projects" className="section-container" data-aos="flip-down">
      <h2 className="title">{t('projects.title')}</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3 className="project-title">{t('projects.ninaProjectTitle')}</h3>
          <img src={nina} alt="" className="project-image" />
          <div className="description-card">
            <p className="project-description">
              {t('projects.ninaDescription')}
            </p>
            <a
              href="https://github.com/Tech3WebStudio/Ecommerce-Mend"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link"
            >
              {t('projects.viewProject')}
            </a>
            <a
              href="https://ninashowroom.techwebstudio.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-link"
            >
              {t('projects.viewPage')}
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">{t('projects.apiGymTitle')}</h3>
          <img src={gym} alt="" className="project-image" />
          <p className="project-description">{t('projects.apiGymDescription')}</p>
          <a
            href="https://github.com/Tech3WebStudio/systemGym"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-link"
          >
            {t('projects.viewProject')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
