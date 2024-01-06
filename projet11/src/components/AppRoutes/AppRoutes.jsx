import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Housing from "../../pages/Housing/Housing";

const AppRoutes = () => {
  return (
    <div className="app-routes">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accueil" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/housing" element={<Housing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
