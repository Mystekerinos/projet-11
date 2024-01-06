import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; // Assurez-vous d'importer votre fichier CSS

const PageNotFound = () => {
  return (
    <div id="page-not-found">
      <Header />
      <div id="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <div className="return-to-home">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
