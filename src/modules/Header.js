import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <ul>
        <li>Time:</li>
        <li>
          <ul className="nameList">
            <li>Itachi</li>
            <li>Sasuke</li>
            <li>Garaa</li>
          </ul>
        </li>
        <li>Login</li>
      </ul>
    </header>
  );
};

export default Header;
