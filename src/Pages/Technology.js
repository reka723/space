import { useLoaderData, useParams } from "react-router";
import data from "../data.json";
import DestinationNavigation from "../Components/DestinationNavigation";
import "./Destination.css";
import CrewNav from "../Components/CrewNav";
import TechnologyNav from "../Components/TechnologyNav";
import "./Technology.css";

const TechnologyPage = () => {
  const { tech } = useParams();
  console.log(data.technology);
  const thisData = data.technology.find(
    (adat) => adat.name.toLowerCase().replace(/ /g, "") === tech
  );
  console.log(thisData);
  return (
    <div className="tech-page">
      <div className="t-page-title">
        <h1>03</h1>
        <h1>Space Launch 101</h1>
      </div>
      <div className="t-container">
        <TechnologyNav />
        <div className="t-container-right">
          <p>The terminology...</p>
          <h1>{thisData.name}</h1>
          <p>{thisData.description}</p>
        </div>
      </div>
      <img src={`..${thisData.images.portrait.slice(1)}`}></img>
    </div>
  );
};
export default TechnologyPage;
