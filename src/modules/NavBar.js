import React from "react";
import "./styles/NavBar.css"

const NavBar = (props) => {
  
    const {setOpenScores,time} = props;
    
   
  return (
    <nav>
      <ul>
        <li>Time: {time}</li>
        <li onClick={()=>{setOpenScores(true)}}>Scores</li>
      </ul>
    </nav>
  );
};

export default NavBar;
