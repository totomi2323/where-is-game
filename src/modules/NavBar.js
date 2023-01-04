import React, { useEffect, useState } from "react";
import Scores from "./Scores";
import "./styles/NavBar.css"

const NavBar = (props) => {
  
    const {stopTimer,setOpenScores} = props;
    const [counter, setCounter] = useState(0);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(counter+1)
        },1000)
          if (stopTimer) {clearTimeout(timer)}
      
    },[counter]);
    
  return (
    <nav>
      <ul>
        <li>Time: {counter}</li>
        <li>
          <ul className="foundList">
            <li>Itachi</li>
            <li>Sasuke</li>
            <li>Garaa</li>
          </ul>
        </li>
        <li onClick={()=>{setOpenScores(true)}}>Scores</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
