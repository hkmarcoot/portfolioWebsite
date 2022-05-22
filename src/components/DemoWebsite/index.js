import React from "react";
import styles from "./styles.module.css";
import linkworthy from "../../img/Screenshot-link-worthy.png";
import xpeerience from "../../img/Screenshot-xpeerience.png";

function DemoWebsite() {
  return (
    <div className={styles.demoWebsiteSection} id="demo-website-section">
      <div className={styles.box}>
        <div className={styles.demoHeader}>
          <h2 className={styles.header}>Demo Websites</h2>
        </div>
        <div className={styles.demoItems}>
          <div className={styles.demoItemsContainer}>
            <div className={styles.demoItem}>
              <a
                href="https://soc-link-worthy.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.linkWorthyPic}
                  src={linkworthy}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Link Worthy</h3>
              <p className={styles.textHolder}>
                This is what I did in a team of 4 in the project week. Its usage
                is to save all the useful links and resources, which were given
                in lesson or in Slack, in the Heroku database. The difficult
                part is updating the whole page after creating a new item. I use
                React Router to make the homepage and content page. It also
                comes with dark/light theme.
              </p>
            </div>
            <div className={styles.demoItem}>
              <a
                href="https://xpeerience.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.xpeeriencePic}
                  src={xpeerience}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Xpeerience</h3>
              <p className={styles.textHolder}>
                Here is our final project! It is used for attending travel event
                and making new friends. We use npm package including slider and
                pagination to display the events. It has a login & register
                system, users can attend events and the information will be
                saved in MongoDB. Users can also create a new event and let
                others to join it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoWebsite;
