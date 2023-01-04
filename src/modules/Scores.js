import React, { useEffect, useState } from "react";
import "./styles/Scores.css";
import uniqid from "uniqid";
const Scores = (props) => {
  const { setSubmitted, setGameOver, setOpenScores } = props;
  const [scores, setScores] = useState([
    { name: "Tamas", time: "1:11", date: "03-01-2023", key: uniqid() },
  ]);

  return (
    <div className="scores">
      <ul className="scoresList">
        <li key={uniqid()}>
          <span>Name</span>
          <span>Time</span>
          <span>Date</span>
        </li>
        {Object.keys(scores).map((score) => {
          return (
            <li key={scores[score].key}>
              <span> {scores[score].name}</span>
              <span> {scores[score].time}</span>
              <span>{scores[score].date}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          if (setSubmitted && setGameOver) {
            setSubmitted(false);
            setGameOver(false);
          } else {
            setOpenScores(false);
          }
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Scores;
