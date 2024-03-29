import React from "react";
import styles from "./styles.module.css";
import linkworthy from "../../img/Screenshot-link-worthy.png";
import xpeerience from "../../img/Screenshot-xpeerience.png";
import newsapp from "../../img/Screenshot-newsapp.png";
import twitterclone from "../../img/Screenshot-twitterclone.png";

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
      <div className={`${styles.box} ${styles.topmargin}`}>
        {/* <div className={styles.demoHeader}>
          <h2 className={styles.header}>Demo Websites</h2>
        </div> */}
        <div className={styles.demoItems}>
          <div className={styles.demoItemsContainer}>
            <div className={styles.demoItem}>
              <a
                href="https://github.com/PercaysoRecruitment/pe3-soc_cohort_8-hkmarcoot"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.newsappPic}
                  src={newsapp}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Your News App</h3>
              <p className={styles.textHolder}>
                A mobile responsive website mainly used for showcasing my CSS
                styling skills. It uses gnew.io API to search for news, which
                contains search area, search history, and result section. In
                addition, it has 14 unit tests.
              </p>
            </div>
            <div className={styles.demoItem}>
              <a
                href="https://github.com/hkmarcoot/100-days-of-code-2nd/tree/main/twitterCloneProject-app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.Pic}
                  src={twitterclone}
                  alt=""
                  width="300px"
                />
              </a>
              <h3>Twitter Clone</h3>
              <p className={styles.textHolder}>
                A Clone Project that uses Twitter API v1.1 in the endpoint.
                Users can search for tweets and view them. Axios is used in
                connecting the Twitter API and momentjs is used to show created
                date of tweet.
              </p>
            </div>
            {/* <div className={styles.demoItem}>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoWebsite;
