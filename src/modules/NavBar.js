import React, { useEffect, useState } from "react";
import "./styles/Header.css"

const NavBar = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(counter+1)
        },1000)
    },[counter])
    
    const openScores = () => {
      document.querySelector(".scores").style.display="block"
    }
  return (
    <header>
      <ul>
        <li>Time: {counter}</li>
        <li>
          <ul className="foundList">
            <li>Itachi</li>
            <li>Sasuke</li>
            <li>Garaa</li>
          </ul>
        </li>
        <li onClick={openScores}>Scores</li>
        <li>Login</li>
      </ul>
    </header>
  );
};

export default NavBar;
