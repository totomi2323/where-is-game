import React, { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "./modules/Dropdown";
import NavBar from "./modules/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scores from "./modules/Scores";

const App = () => {
  const [itachiPosition, setItachiPosition] = useState({
    left: 0,
    right: 0,
  });
  const [garaaPosition, setGaraaPosition] = useState({
    left: 0,
    right: 0,
  });
  const [sasukePosition, setSasukePosition] = useState({
    left: 0,
    right: 0,
  });
  const [topPosition, setTopPoisition] = useState(0);
  const [bottomPosition, setBottomPosition] = useState(0);

  useEffect(() => {
    let picture = document.querySelector(".picture");
    console.log(
      "width:" + picture.clientWidth + " height: " + picture.clientHeight
    );

    let garaaPositionLeft= picture.clientWidth * 0.01;
    setGaraaPosition({
      left: garaaPositionLeft,
      right: garaaPositionLeft + picture.clientWidth * 0.12,
    });

    let top = picture.clientHeight * 0.35;
    let bottom = picture.clientHeight * 0.90;
    setTopPoisition(top);
    setBottomPosition(bottom);

    let itachiPosLeft = picture.clientWidth * 0.78;
    setItachiPosition({
      left: itachiPosLeft,
      right: itachiPosLeft + picture.clientWidth * 0.12,
    });
    let sasukePositionLeft = picture.clientWidth * 0.32;
    setSasukePosition({
      left: sasukePositionLeft,
      right: sasukePositionLeft + picture.clientWidth * 0.12,
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="picture"></div>
      <Dropdown
        itachi={itachiPosition}
        sasuke={sasukePosition}
        garaa={garaaPosition}
        top={topPosition}
        bottom={bottomPosition}
      />
      <Scores />

    </div>
  );
};

export default App;
