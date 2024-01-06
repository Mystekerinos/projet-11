import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to={`/accueil`}>Accueil</Link>
          </li>
          <li>
            <Link to={`/about`}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
