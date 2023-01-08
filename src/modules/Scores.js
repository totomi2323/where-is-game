import React, { useEffect, useState } from "react";
import "./styles/Scores.css";
import uniqid from "uniqid";
import { getFirebaseConfig } from "../firebase-config.js";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

const Scores = (props) => {
  const { setOpenScores } = props;
  const [scores, setScores] = useState([]);

  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig);

  useEffect(() => {
    const recentScoreQuery = query(collection(getFirestore(), "scores"), orderBy("time", "asc"));

    onSnapshot(recentScoreQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "removed") {
        } else {
          let data = change.doc.data();

          setScores((prevState) => ({
            ...prevState,
            [data.key]: data,
          }));
        }
      });
    });
  }, [scores]);

  return (
    <div className="scores">
      <ul className="scoresList">
        <li key={uniqid()} className="highlight">
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
          setOpenScores(false);
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Scores;
