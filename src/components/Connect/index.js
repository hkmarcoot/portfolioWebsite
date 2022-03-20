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
            <i
              className="uil uil-linkedin"
              style={{ color: "red", fontSize: 50 }}
            ></i>
            <div>LinkedIn for my full working & learning journey.</div>
          </div>
          <div className={styles.connectItem}>
            <i
              className="uil uil-twitter"
              style={{ color: "red", fontSize: 50 }}
            ></i>
            <div>Twitter for #100DaysOfCode daily update.</div>
          </div>
          <div className="contact-item">
            <i
              className="uil uil-github"
              style={{ color: "red", fontSize: 50 }}
            ></i>
            <div>Github for #100DaysOfCode coding progress.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
