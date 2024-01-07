import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import housing from "../../data/housing.json";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

const AccomodationSheet = () => {
  const { id } = useParams();
  const selectedHousing = housing.find((item) => item.id === id);
  if (!selectedHousing) {
    return <PageNotFound />;
  }
  return (
    <div className="accomodationSheet">
      <section>
        <Header />

        <img
          src={selectedHousing.cover}
          alt={selectedHousing.title}
          className="logo"
        />

        <div className="singleproduct__content">
          <div className="group-element-left">
            <h1 className="title">{selectedHousing.title}</h1>
            <p className="location">{selectedHousing.location}</p>
            <div className="tags-list-wrapper">
              {selectedHousing.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="group-elements-right">
            <div className="name-photo-wrapper">
              <div className="host-name">{selectedHousing.host.name}</div>
              <img
                className="host-photo"
                src={selectedHousing.host.picture}
                alt={selectedHousing.host.name}
              />
            </div>
            <Rating rating={selectedHousing.rating} />
          </div>
        </div>

        <div className="singleproduct__collapse">
          <div title="description" text={""} />
          <div title="équipement" text={""} />
        </div>
        <div className="singleproduct__collapse">
          <Collapse title="description" text={"description"} />
          <Collapse title="équipement" text={"content"} />
        </div>
        <Footer />
      </section>
    </div>
  );
};
export default AccomodationSheet;
