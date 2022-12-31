import React, { useEffect, useState } from "react";
import "./styles/Dropdown.css";

const Dropdown = () => {
  const [selected, setSelected] = useState("Nothing selected");
  const [dropPositionX, setDropPositionX] = useState(100);
  const [dropPositionY, setDropPositionY] = useState(100);
  const [dropDisplay, setDropDisplay] = useState("none");

  useEffect(() => {
    function openDropDown(e) {
      console.log("vas");
      console.log(e);
      setDropPositionX(e.clientX - 20 + "px");
      setDropPositionY(e.clientY - 20 + "px");
      console.log(dropPositionX);
      setDropDisplay("block");
    }
    document.addEventListener("click", openDropDown);

    return () => {
      document.removeEventListener("click", openDropDown);
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
