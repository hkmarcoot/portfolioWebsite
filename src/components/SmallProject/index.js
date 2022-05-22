import React from "react";
import styles from "./styles.module.css";
import tictactoe from "../../img/Screenshot-tictactoe.png";
import rockpaperscissors from "../../img/Screenshot-rockpaperscissors.png";
import movielist from "../../img/Screenshot-movie-list.png";

function SmallProject() {
  return (
    <div className={styles.spSection} id="small-project-section">
      <div className={styles.box}>
        <div className={styles.spHeader}>
          <h2 className={styles.header}>Small Projects</h2>
        </div>
        <div className={styles.spItems}>
          <div className={styles.spItemsContainer}>
            <div className={styles.spItem}>
              <a
                href="https://tictactoe-marco.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.tictactoe}
                  src={tictactoe}
                  alt=""
                  width="250px"
                />
              </a>
              <h3>Tic Tac Toe</h3>
              <p className={styles.textHolder}>
                A small game written in React. It is a two players game, the
                first one will be the cross, and the second one will be the
                circle.
              </p>
            </div>
            <div className="project-item">
              <a
                href="https://soc-movie-list.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.movielist}
                  src={movielist}
                  alt=""
                  width="250px"
                />
              </a>
              <h3>Movie-List</h3>
              <p className={styles.textHolder}>
                Search movies in OMDb API with search record underneath. You can
                search movie with the year it released.
              </p>
            </div>
            <div className={styles.spItem}>
              <a
                href="https://rock-paper-scissors-workshop-soc.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.rockpaperscissors}
                  src={rockpaperscissors}
                  alt=""
                  width="250px"
                />
              </a>
              <h3>Rock Paper Scissors</h3>
              <p className={styles.textHolder}>
                Simple UI that plays Rock Paper Scissors against PC. The PC will
                pick a random choice, it will calculate who wins the game and
                accumulate your result including the number of games you played.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallProject;
