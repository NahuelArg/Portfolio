// Importaciones necesarias
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Loader from "./components/loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css"; // Animaciones de scroll
import "./App.css"; // Estilos globales
import "./i18n"; // Configuración de i18next
import Flag from "react-world-flags"; // Componente para mostrar banderas

// Componente principal de la aplicación
function App() {
  // Estado para controlar la carga
  const [loading, setLoading] = useState(true);

  // Hook para traducciones
  const { t, i18n } = useTranslation();

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Simulación de tiempo de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 segundos de carga
    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  // Inicialización de animaciones al montar el componente
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Duración de las animaciones
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        // Mostrar el componente Loader mientras carga
        <Loader />
      ) : (
        // Contenido principal después de cargar
        <div>
          {/* Selector de idioma */}
          <div className="language-switcher">
            <ul className="language-selector">
              {/* Opción para español */}
              <li data-lang="es" onClick={() => changeLanguage("es")}>
                <Flag
                  code="ES" // Código ISO de la bandera
                  alt="Español"
                  className="flag-iconES"
                />
                <p>ESP</p>
                <span className="tooltip">{t("Select Spanish")}</span>
              </li>
              {/* Opción para inglés */}
              <li data-lang="en" onClick={() => changeLanguage("en")}>
                <Flag
                  code="US" // Código ISO de la bandera
                  alt="English"
                  className="flag-iconUSA"
                />
                <p>ENG</p>
                <span className="tooltip">{t("Select English")}</span>
              </li>
            </ul>
          </div>

          {/* Secciones principales de la aplicación */}
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
