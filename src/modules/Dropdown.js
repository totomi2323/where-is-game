import React, { useEffect, useState } from "react";
import characterFound from "../functions/characterFound.js";
import checkCharacter from "../functions/checkCharacterOnPosition.js";
import "./styles/Dropdown.css";

const Dropdown = (props) => {
  const { itachi, sasuke, garaa, top, bottom, checkAllFound, stopTimer } =
    props;
  const [dropPositionX, setDropPositionX] = useState(0);
  const [dropPositionY, setDropPositionY] = useState(0);
  const [dropDisplay, setDropDisplay] = useState("none");

  useEffect(() => {
    function openDropDown(e) {
      setDropPositionX(e.clientX);
      setDropPositionY(e.clientY);
      setDropDisplay("block");
    }

    let picture = document.querySelector(".picture");
    if (!stopTimer) {
      picture.addEventListener("click", openDropDown);
    }
   

    return () => {
      picture.removeEventListener("click", openDropDown);
    };
  }, [dropPositionX, dropPositionY, dropDisplay,stopTimer]);

  const checkValidPosition = (character) => {
    let left;
    let right;
    switch (character) {
      case "Itachi":
        left = itachi.left;
        right = itachi.right;
        break;
      case "Sasuke":
        left = sasuke.left;
        right = sasuke.right;
        break;
      case "Garaa":
        left = garaa.left;
        right = garaa.right;
        break;
      default:
        console.log("No character selected");
    }
    if (
      checkCharacter(
        character,
        left,
        right,
        top,
        bottom,
        dropPositionX,
        dropPositionY
      )
    ) {
      characterFound(character);
      checkAllFound();
    } else {
      console.log("keep looking around");
    }
  };

  const choosenCharacter = (e) => {
    setDropDisplay("none");
    checkValidPosition(e.target.innerHTML);
  };
  return (
    <div
      className="dropContainer"
      style={{ left: dropPositionX, top: dropPositionY, display: dropDisplay }}
    >
      <ul className="nameList">
        <li onClick={choosenCharacter}>Sasuke</li>
        <li onClick={choosenCharacter}>Itachi</li>
        <li onClick={choosenCharacter}>Garaa</li>
      </ul>
    </div>
  );
};

export default Dropdown;
