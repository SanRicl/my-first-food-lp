import "./header.css";
import { MenuOutlined } from "@material-ui/icons";

import React, { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="headerContainer">
      <div className="headerInfos">
        <div className="logo">Food.</div>
        <div className="navContainer" id={showLinks ? "hidden" : ""}>
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
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
            Expert
          </a>
          <a
            href="#testimonials"
            onClick={() => setActiveNav("#testimonials")}
            className={activeNav === "#testimonials" ? "active" : ""}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
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
