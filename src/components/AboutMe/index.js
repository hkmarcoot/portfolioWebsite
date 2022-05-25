import React from "react";
import "./styles.css";
import Screenshot from "../../img/Screenshot-twitter-post.png";

function AboutMe() {
  return (
    <div className="about-me-section" id={"about-me-section"}>
      <div className="about-me-header">
        <h2 className="header">About Me</h2>
      </div>
      <div className="about-me-items">
        <div className="about-me-items-container">
          <div className="left-item">
            <h3>Aiming to be Web Developer</h3>
            <p className="textHolder">
              Hi everyone! My name is Marco and I am aiming to be a Full Stack /
              Frontend Web Developer. Right now I am enhancing my e-commerce
              skills by studying the{" "}
              <a
                className="btn"
                href="https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce?"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bold">
                  Google Digital Marketing & E-commerce Professional Certificate
                  in Coursera
                </span>
              </a>{" "}
              and learning{" "}
              <a
                className="btn"
                href="https://codingwithjan.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bold">
                  Shopify Development in Coding With Jan.
                </span>
              </a>
            </p>
            <p className="textHolder">
              By mastering the web development skills I would like to build
              frontend landing pages and e-commerce websites in a company. In
              the last project we used MERN Stack and I am confident to handle
              backend duties. I am planning to use Shopify to build myself an
              online store selling STEM gadget as my next challenge.
            </p>
            <p className="textHolder">
              On right side is my wonderful final project team! We have pair
              programming experience and are using agile method to assign the
              tasks.
            </p>
          </div>
          <div className="right-item">
            <img src={Screenshot} alt="" width="400px" />
          </div>
        </div>
      </div>
      <div className="about-me-2-items">
        <div className="about-me-2-items-container">
          <div className="about-me-2-items-container2">
            <p>
              <p className="skill-set-title">My Coding Skill Set</p>
              <p>Frontend Skills: JavaScript, HTML, CSS, React</p>
              <p>Backend Skills: Node, Express, MongoDB, PostgreSQL</p>Testing
              Skills: JEST <p>Design Tools: Figma, Photoshop, Illustrator </p>
              <p>Other Skills: Unity, MIT Scratch, App Inventor</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
