import React, { useState } from "react";
import sawLogo from "../assets/images/sawLogo.png";

const Header = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <header>
        <nav className="bgc-midnight navbar is-fixed-top m-4" role="navigation">
          <div className="navbar-brand">
            {/* logo */}
            {/* <a className="navbar-item" href="#top">
              <img src={sawLogo} alt="an 8-bit avatar of a winking woman with glasses" className="w-xl"></img>
            </a> */}

            <h1 className="bdr-pink br-15 c-pink has-text-weight-bold is-size-4 p-1">SAW</h1>

            {/* navbar burger */}
            <div
              onClick={() => {
                setisActive(!isActive);
              }}
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              data-target="navbarMenuToggle"
            >
              <span className="c-white"></span>
              <span className="c-white"></span>
              <span className="c-white"></span>
            </div>
          </div>
          {/* navbar items */}
          <div id="navbarMenuLinkToggle" className={`navbar-menu ${isActive ? "bgc-eggplant is-active" : ""}`}>
            <div className="navbar-end">
              <a href="#about" class="c-white is-size-5 navbar-item">
                About
              </a>

              <a href="#projects" className="c-white is-size-5 navbar-item">
                Projects
              </a>

              <a href="#experience" className="c-white is-size-5 navbar-item">
                Experience
              </a>

              <a href="#contact" className="c-white is-size-5 navbar-item">
                Contact
              </a>

              <p className="control">
                <a href="../assets/images/SWilliams-Resume2022.pdf" className="button bgc-pink c-midnight has-text-weight-semibold is-outlined is-rounded navbar-item">
                  Resume
                </a>
              </p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
