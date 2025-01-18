import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LanguageSwitcher = ({ changeLanguage }) => (
    <div className="language-switcher">
      <ul className="language-selector">
        <li>
          <Flag
            code="ES"
            alt="Español"
            className="flag-iconES"
            onClick={() => changeLanguage("es")}
          />
          <p>ESP</p>
          <span className="tooltip">Seleccionar Español</span>
        </li>
        <li>
          <Flag
            code="US"
            alt="English"
            className="flag-iconUSA"
            onClick={() => changeLanguage("en")}
          />
          <p>ENG</p>
          <span className="tooltip">Select English</span>
        </li>
      </ul>
    </div>
  );
export default LanguageSwitcher;  