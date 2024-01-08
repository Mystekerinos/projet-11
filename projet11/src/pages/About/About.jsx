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
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
        <li>
          <Collapse key={"index"} title={"title"} text={"text"} />
        </li>
      </ul>
      <Footer />
    </div>
  );
};
export default About;
