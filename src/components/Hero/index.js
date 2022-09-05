import React from "react";
import "./styles.css";
import profilePic from "../../img/Marco_Tsang_01.jpeg";

function Hero() {
  return (
    <div className="hero-box">
      <div className="hero-box-container">
        <div className="profilephoto-box">
          <img className="profilephoto" src={profilePic} alt="" width="150px" />
        </div>
        <div className="hero-overlay">
          <h1 className="hero-h1">I am a Full Stack Developer</h1>
          <h2 className="hero-h2">
            Graduated From The School Of Code Bootcamp
          </h2>
        </div>
        <div className="hero-button">
          <button
            className="hero-button-individual"
            onClick={() => window.location.replace("/#demo-website-section")}
          >
            Demo Websites
          </button>
          <button
            className="hero-button-individual"
            onClick={() => window.location.replace("/#small-project-section")}
          >
            Small Projects
          </button>
          <button
            className="hero-button-individual"
            onClick={() => window.location.replace("/#achievement-section")}
          >
            Achievement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
