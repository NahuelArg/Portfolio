import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

// External libraries
import AOS from "aos";
import "aos/dist/aos.css";
import Flag from "react-world-flags";

// Global styles and translations
import "./App.css";
import "../src/locales/i18n";

// Components and pages
import Loader from "./components/loader/Loader";
import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./components/NotFound.jsx";
function App() {
  // State for loading
  const [loading, setLoading] = useState(true);

  // Translation hook
  const { t, i18n } = useTranslation();

  // Change language function
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS (animations on scroll)
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      {/* Navbar section */}
      <nav className="app-navbar-container">
        <Navbar />
        <div className="language-switcher">
          <ul className="language-selector">
            <li onClick={() => changeLanguage("es")} data-lang="es">
              <Flag code="ES" alt="Español" className="flag-icon" />
              <p>ESP</p>
              <span className="tooltip">{t("Select Spanish")}</span>
            </li>
            <li onClick={() => changeLanguage("en")} data-lang="en">
              <Flag code="US" alt="English" className="flag-icon" />
              <p>ENG</p>
              <span className="tooltip">{t("Select English")}</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content section */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
