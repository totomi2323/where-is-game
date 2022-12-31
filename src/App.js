import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./modules/Header";
import Dropdown from "./modules/Dropdown";

const App = () => {
  const [itachiPosition, setItachiPosition] = useState({
    left: 0,
    right: 0,
  });
  const [garaaPosition, setGaraaPosition] = useState({ 
    left: 0, 
    right: 0});
  const [sasukePosition, setSasukePosition] = useState({ 
    left: 0, 
    right: 0});
  const [topPosition, setTopPoisition] = useState();
  const [bottomPosition, setBottomPosition] = useState();

  useEffect(() => {
    let picture = document.querySelector(".picture");
    console.log(
      "width:" + picture.clientWidth + " height: " + picture.clientHeight
    );
    let itachiPos = picture.clientWidth * 0.78;
    let top = picture.clientHeight * 0.5;
    let bottom = picture.clientHeight * 0.99;
    let sasukePosition = setTopPoisition(top);
    setBottomPosition(bottom);
    setItachiPosition({
      left: itachiPos,
      right: itachiPos + picture.clientWidth * 0.12,
    });
    console.log(topPosition);
    console.log(bottom);
    return () => {};
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="picture"></div>
      <Dropdown />
      <div
        className="element"
        style={{
          left: itachiPosition.left,
          top: topPosition,
          width: itachiPosition.right - itachiPosition.left,
          height: bottomPosition - topPosition,
        }}
      ></div>
    </div>
  );
};

export default App;
