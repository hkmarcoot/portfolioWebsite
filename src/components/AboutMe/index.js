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
              Frontend Web Developer that creates stunning landing pages and
              e-commerce websites. Right now I am enhancing my e-commerce skills
              by studying the{" "}
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
              Building websites in a company and for my own hobbies is a hybrid
              working lifestyle that I long-desired. Apart from the business
              experience that I can earn by running e-commerce websites by
              myself, the reason behind is that I would like to learn marketing
              & web design skills as well as working with other kinds of people,
              like marketer, web designer and project manager in workplace.
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
    </div>
  );
}

export default AboutMe;
