import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
const About = () => {
  return (
    <div id="about">
      <Header />
      <Banner homePage={false} />
      <ul className="list-wrapper">
        <Collapse key={"index"} title={"title"} text={"text"} />
        <Collapse key={"index"} title={"title"} text={"text"} />
        <Collapse key={"index"} title={"title"} text={"text"} />
        <Collapse key={"index"} title={"title"} text={"text"} />
        <Collapse key={"index"} title={"title"} text={"text"} />
        <Collapse key={"index"} title={"title"} text={"text"} />
      </ul>
      <Footer />
    </div>
  );
};
export default About;
