import React from "react";
import styles from "./styles.module.css";

function Connect() {
  return (
    <div className={styles.contactSection} id="contact-section">
      <div className={styles.connectHeader}>
        <h2 className={styles.header}>Connect</h2>
      </div>
      <div className={styles.connectItems}>
        <div className={styles.connectItemsContainer}>
          <div className={styles.connectItem}>
            <a
              className="btn"
              href="https://www.linkedin.com/in/marco-tsang112/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="uil uil-linkedin"
                style={{ color: "white", fontSize: 50 }}
              ></i>

              <div className={styles.describe}>
                LinkedIn for my full working & learning journey.
              </div>
            </a>
          </div>
          <div className={styles.connectItem}>
            <a
              className="btn"
              href="https://twitter.com/marcotsang112"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="uil uil-twitter"
                style={{ color: "white", fontSize: 50 }}
              ></i>

              <div className={styles.describe}>
                Twitter for 2nd #100DaysOfCode daily update.
              </div>
            </a>
          </div>
          <div className={styles.connectItem}>
            <a
              className="btn"
              href="https://github.com/hkmarcoot/100-days-of-code"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="uil uil-github"
                style={{ color: "white", fontSize: 50 }}
              ></i>

              <div className={styles.describe}>
                GitHub for 1st #100DaysOfCode coding progress.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
