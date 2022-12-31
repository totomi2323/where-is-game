import React, { useEffect, useState } from "react";
import "./styles/Dropdown.css";

const Dropdown = () => {
  const [selected, setSelected] = useState("Nothing selected");
  const [dropPositionX, setDropPositionX] = useState(0);
  const [dropPositionY, setDropPositionY] = useState(0);
  const [dropDisplay, setDropDisplay] = useState("none");

  useEffect(() => {
    function openDropDown(e) {
      setDropPositionX(e.clientX - 20 + "px");
      setDropPositionY(e.clientY - 20 + "px");
      setDropDisplay("block");
    }

    let picture = document.querySelector(".picture")
    picture.addEventListener("click", openDropDown);

    return () => {
      picture.removeEventListener("click", openDropDown);
    };
  }, [dropPositionX, dropPositionY]);
  return (
    <div
      className="dropContainer"
      style={{ left: dropPositionX, top: dropPositionY, display: dropDisplay }}
    >
      <select
        value={selected}
        onChange={(event) => {
          setSelected(event.target.value);
            setDropDisplay("none")}}
      >
        <option value={"Itachi"}>Itachi</option>
        <option value={"Sasuke"}>Sasuke</option>
        <option value={"Garaa"}>Garaa</option>
      </select>
      <p>Selected: {selected}</p>
    </div>
  );
};

export default Dropdown;
