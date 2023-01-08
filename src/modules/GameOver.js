import React from "react";
import "./styles/GameOver.css";
import { getFirebaseConfig } from "../firebase-config.js";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

const GameOver = (props) => {
  const { setGameOver, setOpenScores, time } = props;
  const [name, setName] = useState();
  const [today, setToday] = useState();

  
  const nameListener = (e) => {
   setName(e.target.value)
  };
  
  useEffect(() => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();

    date = dd + "/" + mm + "/" + yyyy;

    setToday(date)
  },[today])
 

  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig);

  const submitScore = async () => {
    try {
      await addDoc(collection(getFirestore(), "scores"), {
        date: today,
        name: name,
        time: time,
        key: uniqid()
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameListener}
        ></input>
        <br></br>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            setGameOver(false);
            setOpenScores(true);
            submitScore();
            e.preventDefault();
          }}
        ></input>
      </form>
    </div>
  );
};

export default GameOver;
