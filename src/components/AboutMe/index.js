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
            <h3>Full Stack JavaScript Developer</h3>
            <p className="textHolder">
              Hi everyone! My name is Marco and I look forward to building
              JavaScript project in company. Recently, I have finished building
              Twitter clone as my challenge.
              {/* , enhancing my eCom skills by studying the{" "}
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
                  Frontend Shopify Development in Coding With Jan.
                </span>
              </a> */}
            </p>
            <p className="textHolder">
              I love science when I was studying in university, because I like
              solving puzzles and the surprise from scientific discovery.
              Problem-solving is a transfersable skill and I like joining coding
              hackathon with problem-solving at the core. Perviously, I won
              third place in App Inventor Competition in Adult Track by building
              COVID-19 Tracker App and had experience in joining NASA
              International Space Apps Challenge by building astronaut
              activities weekly schedule in React.
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
              <p>
                Backend Skills: Node, Express, MongoDB, PostgreSQL, Couchbase
                NoSQL
              </p>
              Testing Skills: JEST{" "}
              <p>Design Tools: Figma, Photoshop, Illustrator </p>
              <p>Other Skills: Unity, MIT Scratch, App Inventor</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
