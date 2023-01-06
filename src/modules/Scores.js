import React, { useEffect, useState } from "react";
import "./styles/Scores.css";
import uniqid from "uniqid";
import { getFirebaseConfig } from "../firebase-config.js";
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore,onSnapshot, query, docChanges, snapshotEqual, doc} from "firebase/firestore"

const Scores = (props) => {
  const { setSubmitted, setGameOver, setOpenScores } = props;
  const [scores, setScores] = useState([

  ]);



  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig);

  useEffect(() => {
    const recentScoreQuery = query(collection(getFirestore(), "scores"))
    
    onSnapshot(recentScoreQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        if (change.type === 'removed') {
        } else {
          let data = change.doc.data();
          console.log(data)

          setScores((prevState) => ({
            ...prevState,
            [data.key]: data,
          }))
        }
      });
    })
    console.log(scores)
    },[])


  async function saveMessage(messageText) {
    try {
      await addDoc(collection(getFirestore(), 'messages'), {
        text: messageText,
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

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
