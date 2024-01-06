import React from "react";
import "./Banner.css";
import BackgroundHome from "../../assets/image/BackgroundHome.svg";
// import BackgroundAbout from "../../assets/image/BackgroundAbout.svg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BackgroundHome} alt="background" />
      {/* <img src={BackgroundAbout} alt="background" /> */}
      <h1 className="head-line">Chez vous, partout et ailleurs</h1>;
    </div>
  );
};

export default Banner;
