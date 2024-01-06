import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div id="homePage">
        <Header />
        <Banner />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
