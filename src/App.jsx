import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.css"; // Archivo global para los estilos
import Loader from "./components/loader/Loader.jsx";
import "./i18n"; // Importa la configuración de i18next
import AOS from "aos";
import "aos/dist/aos.css";

// Importa el componente react-world-flags
import Flag from "react-world-flags";

function App() {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation(); // hook de i18next

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simula 2 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 }); // Duración de las animaciones
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <header>
            {/* Esto traducirá el texto "welcome" */}

            {/* Botones para cambiar idioma con banderas */}
          
            <div className="language-switcher">
            
              <Flag
                code="ES" // Código ISO de la bandera de España
                alt="Español"
                className="flag-icon"
                onClick={() => changeLanguage("es")}
              />

              <Flag
                code="US" // Código ISO de la bandera de USA
                alt="English"
                className="flag-icon"
                onClick={() => changeLanguage("en")}
              />
            </div>
            
          </header>

          {/* Aquí van las otras secciones */}
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
