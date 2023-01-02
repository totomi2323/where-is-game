import React, { useEffect, useState } from "react";
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

  const checkPosition = (character) => {
   
    switch(character) {
      case "Itachi" :
        if (
          dropPositionX >= itachi.left &&
          dropPositionX <= itachi.right &&
          dropPositionY >= top &&
          dropPositionY <= bottom
        ) {
          console.log("found itachi");
        }
      break;
      case "Sasuke" :
        if (
          dropPositionX >= sasuke.left &&
          dropPositionX <= sasuke.right &&
          dropPositionY >= top &&
          dropPositionY <= bottom
        ) {
          console.log("found sasuke");
        }
        break;
        case "Garaa" :
          if (
            dropPositionX >= garaa.left &&
            dropPositionX <= garaa.right &&
            dropPositionY >= top &&
            dropPositionY <= bottom
          ) {
            console.log("found garaa");
          }
          break;
    }
    
  };

  const choosenCharacter = (e) => {
    setSelected(e.target.innerHTML);
    setDropDisplay("none");
    checkPosition(e.target.innerHTML);
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
