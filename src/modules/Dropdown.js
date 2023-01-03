import React, { useEffect, useState } from "react";
import characterFound from "../functions/characterFound.js";
import checkCharacter from "../functions/checkCharacterOnPosition.js";
import "./styles/Dropdown.css";

const Dropdown = (props) => {
  const { itachi, sasuke, garaa, top, bottom } = props;
  const [selected, setSelected] = useState("Itachi");
  const [dropPositionX, setDropPositionX] = useState(0);
  const [dropPositionY, setDropPositionY] = useState(0);
  const [dropDisplay, setDropDisplay] = useState("none");

  useEffect(() => {
    function openDropDown(e) {
      setDropPositionX(e.clientX);
      setDropPositionY(e.clientY);
      setDropDisplay("block");
      console.log(e.clientX, e.clientY);
    }

    let picture = document.querySelector(".picture");
    picture.addEventListener("click", openDropDown);

    return () => {
      picture.removeEventListener("click", openDropDown);
    };
  }, [dropPositionX, dropPositionY]);

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
   if (checkCharacter(
      character,
      left,
      right,
      top,
      bottom,
      dropPositionX,
      dropPositionY
    )) { characterFound(character)} else {
      console.log("keep looking around")
    };
  };

  const choosenCharacter = (e) => {
    setSelected(e.target.innerHTML);
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
