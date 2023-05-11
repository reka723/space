import { useLoaderData, useParams } from "react-router";
import data from "../data.json";
import DestinationNavigation from "../Components/DestinationNavigation";
import "./Destination.css";

const DestinationPage = () => {
  const { planet } = useParams();
  const thisData = data.destinations.find(
    (adat) => adat.name.toLowerCase() === planet
  );
  return (
    <div className="destination-page">
      <div className="d-page-title">
        <h1>01</h1>
        <h1>Pick your destination</h1>
      </div>
      <div className="d-container">
        <div className="d-container-left">
          <img src={`..${thisData.images.png.slice(1)}`}></img>
        </div>
        <div className="d-container-right">
          <DestinationNavigation />
          <h1>{thisData.name.toUpperCase()}</h1>
          <p>{thisData.description}</p>
          <div className="d-container-bottom">
            <div>
              <p>Avg. Distance</p>
              <p>{thisData.distance}</p>
            </div>
            <div>
              <p>Est. travel time</p>
              <p>{thisData.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationPage;
