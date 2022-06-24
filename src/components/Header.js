import React, { useState } from "react";
import sawLogo from "../assets/images/sawLogo.png";

const Header = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar is-fixed-top " role="navigation">
          <div className="navbar-brand">
            {/* logo */}
            <a className="navbar-item" href="#top">
              <img src={sawLogo} alt="an 8-bit avatar of a winking woman with glasses" className="w-xl"></img>
            </a>

            {/* navbar burger */}
            <div
              onClick={() => {
                setisActive(!isActive);
              }}
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              data-target="navbarMenuToggle"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* navbar items */}
          <div id="navbarMenuLinkToggle" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <a href="#about" class="navbar-item">
                About
              </a>

              <a href="#projects" className="navbar-item">
                Projects
              </a>

              <a href="#experience" className="navbar-item">
                Experience
              </a>

              <a href="#contact" className="navbar-item">
                Contact
              </a>

              <p className="button navbar-item">Resume</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
