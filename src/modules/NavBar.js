import React, { useEffect, useState } from "react";
import Scores from "./Scores";
import "./styles/NavBar.css"

const NavBar = (props) => {
  
    const {setOpenScores,time} = props;
    
   
  return (
    <nav>
      <ul>
        <li>Time: {time}</li>
        <li onClick={()=>{setOpenScores(true)}}>Scores</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
