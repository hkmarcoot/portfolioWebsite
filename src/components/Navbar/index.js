import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo-box">
        <h2 className="logo" id="logo">
          Marco Tsang's Portfolio Website
        </h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <div onClick={() => window.location.replace("/#about-me-section")}>
              About Me
            </div>
          </li>
          <li>
            <div onClick={() => window.location.replace("/#contact-section")}>
              Contact
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
