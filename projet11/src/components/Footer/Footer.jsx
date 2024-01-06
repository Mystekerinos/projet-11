import React from "react";
import LogoFooter from "../../assets/image/LogoFooter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <img src={LogoFooter} alt="Logo" />
        <p>© 2020 kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
