import React from "react";
import styles from "./styles.module.css";
import tictactoe from "../../img/Screenshot-tictactoe.png";
import rockpaperscissors from "../../img/Screenshot-rockpaperscissors.png";
import movielist from "../../img/Screenshot-movie-list.png";

function SmallProject() {
  return (
    <div className={styles.spSection} id="small-project-section">
      <div className={styles.spHeader}>
        <h2 className={styles.header}>Small Projects</h2>
      </div>
      <div className={styles.spItems}>
        <div className={styles.spItemsContainer}>
          <div className={styles.spItem}>
            <img
              className={styles.tictactoe}
              src={tictactoe}
              alt=""
              width="250px"
            />
            <h3>Tic Tac Toe</h3>
            <p className={styles.textHolder}>
              A small game written in React. It is a two players game, the first
              one will{" "}
            </p>
          </div>
          <div className="project-item">
            <img
              className={styles.movielist}
              src={movielist}
              alt=""
              width="250px"
            />
            <h3>Movie-List</h3>
            <p className={styles.textHolder}>
              Search movies in OMDb API with search record underneath.
            </p>
          </div>
          <div className={styles.spItem}>
            <img
              className={styles.rockpaperscissors}
              src={rockpaperscissors}
              alt=""
              width="250px"
            />
            <h3>Rock Paper Scissors</h3>
            <p className={styles.textHolder}>
              Simple UI that plays Rock Paper Scissors against PC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallProject;
