import React from "react";
import "./Header.css";
import LogoHeader from "../../assets/image/LogoHeader.svg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <img src={LogoHeader} alt="Logo" className="logo" />
      <NavBar />
    </header>
  );
};

export default Header;
