import React, { useEffect, useState } from "react";
import "./styles/GameOver.css";
import Scores from "./Scores";

const GameOver = (props) => {
  const { setGameOver } = props;
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="text" id="name" name="name"></input>
        <br></br>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            setSubmitted(true);
            e.preventDefault();
          }}
        ></input>
      </form>
      {submitted && (
        <Scores setSubmitted={setSubmitted} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default GameOver;
