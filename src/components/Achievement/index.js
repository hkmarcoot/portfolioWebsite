import React from "react";
import scratch from "../../img/Screenshot-scratch.png";
import appinventor from "../../img/Screenshot-appinventor.png";
import daysofcode from "../../img/Screenshot-100daysofcode.png";
import styles from "./styles.module.css";

function Achievement() {
  return (
    <div className={styles.achievementSection} id="achievement-section">
      <div className={styles.box}>
        <div className={styles.achieveHeader}>
          <h2 className={styles.header}>Achievement</h2>
        </div>
        <div className={styles.achieveItems}>
          <div className={styles.achieveItemsContainer}>
            <div className={styles.achieveItem}>
              <a
                href="https://www.udemy.com/course/scratch-3-learn-by-17-games-with-4-tactics/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.scratchPic}
                  src={scratch}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Made a Udemy Course</h3>
              <p className={styles.textHolder}>
                Spent more than half a year to record tutorials that summarized
                what I learned and the tactics that I used in teaching 3-12
                years old children about MIT Scratch.
              </p>
            </div>
            <div className={styles.achieveItem}>
              <a
                href="https://gallery.appinventor.mit.edu/?galleryid=5419879515947008"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.appinventorPic}
                  src={appinventor}
                  alt=""
                  width="150px"
                />
              </a>
              <h3>3rd Place in Competition</h3>
              <p className={styles.textHolder}>
                Joined the App Inventor Competition in adult track and won the
                3rd place by creating a Covid-19 Hong Kong Information Center
                app.
              </p>
            </div>
            <div className={styles.achieveItem}>
              <a
                href="https://github.com/hkmarcoot/100-days-of-code/blob/master/log.md"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.daysofcodePic}
                  src={daysofcode}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Finish #100DaysOfCode Challenge</h3>
              <p className={styles.textHolder}>
                The challenge kept step with the bootcamp, which was 117 days
                from the start of bootcamp to the end of it on 11th March 2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
