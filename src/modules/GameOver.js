import React from "react";
import "./styles/GameOver.css";

const GameOver = (props) => {
  const {setGameOver,setOpenScores } = props;
  

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
            setGameOver(false);
            setOpenScores(true);
            e.preventDefault();
          }}
        ></input>
      </form>
     
    </div>
  );
};

export default GameOver;
