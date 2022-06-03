import "./header.css";
import { MenuOutlined } from "@material-ui/icons";

import React, { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.headerContainer')
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  return (
    <div className="headerContainer">
      <div className="headerInfos">
        <div className="logo"><a href="#home">Food.</a></div>
        <div className="navContainer" id={showLinks ? "hidden" : ""}>
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            Inicio
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            Sobre
          </a>
          <a
            href="#menu"
            onClick={() => setActiveNav("#menu")}
            className={activeNav === "#menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#expert"
            onClick={() => setActiveNav("#expert")}
            className={activeNav === "#expert" ? "active " : ""}
          >
            Profissionais
          </a>
          <a
            href="#testimonials"
            onClick={() => setActiveNav("#testimonials")}
            className={activeNav === "#testimonials" ? "active" : ""}
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contato
          </a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className="menuBtn">
          {" "}
          <MenuOutlined />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
