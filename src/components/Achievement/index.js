import React from "react";
import scratch from "../../img/Screenshot-scratch.png";
import appinventor from "../../img/Screenshot-appinventor.png";
import daysofcode from "../../img/Screenshot-100daysofcode.png";
import styles from "./styles.module.css";

function Achievement() {
  return (
    <div className={styles.achievementSection} id="achievement-section">
      <div className={styles.achieveHeader}>
        <h2 className={styles.header}>Achievement</h2>
      </div>
      <div className={styles.achieveItems}>
        <div className={styles.achieveItemsContainer}>
          <div className={styles.achieveItem}>
            <img src={scratch} alt="" width="300px" />
            <h3>Made a Udemy Course</h3>
            <p className={styles.textHolder}>
              To save all the useful links and resources in the Heroku database.
            </p>
          </div>
          <div className={styles.achieveItem}>
            <img src={appinventor} alt="" width="150px" />
            <h3>3rd Place in Competition</h3>
            <p className={styles.textHolder}>
              To save all the useful links and resources in the Heroku database.
            </p>
          </div>
          <div className={styles.achieveItem}>
            <img src={daysofcode} alt="" width="300px" />
            <h3>Finish #100DaysOfCode Challenge</h3>
            <p className={styles.textHolder}>
              To save all the useful links and resources in the Heroku database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
