import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css"; // Importa el archivo CSS para Navbar


const Navbar = () => {
  const { t, i18n } = useTranslation(); // Obtener traducciones y configuración de idioma
  const [navVisible, setNavVisible] = useState(false); // Estado de visibilidad

  // Función para alternar la visibilidad
  const toggleNav = () => setNavVisible(!navVisible);

  // Determinar el CV según el idioma
  const getCVLink = () => {
    return i18n.language === "en"
      ? "https://drive.google.com/file/d/1dsaqz5Onu3KXL4xZ7TB7dGi9ZAx_pRsf/view?usp=drive_link" 
      : "https://drive.google.com/file/d/1aEd_LjRy0e3yUmJnnpiuHKz408043DD5/view?usp=drive_link";
  };

  return (
    <div>
      {/* Botón para alternar el menú */}
      <button className="toggle-nav" onClick={toggleNav}>
        {navVisible ? (
          <span className="material-icons md-light">close</span>
        ) : (
          <span className="material-icons md-light">menu</span>
        )}
      </button>

      {/* Barra de navegación */}
      <div className={`navbar ${navVisible ? "visible" : ""}`}>
        <a href="/" className="navbar-link">
          {t("home.profileAltText")}
        </a>

        <a href="/projects" className="navbar-link">
          {t("home.viewProjects")}
        </a>

        <a href="/contact" className="navbar-link">
          {t("home.contactMe")}
        </a>

        <a href={getCVLink()} download className="navbar-link">
          {t("home.downloadCV")}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
