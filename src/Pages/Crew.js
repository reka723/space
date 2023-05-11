import { useLoaderData, useParams } from "react-router";
import data from "../data.json";
import DestinationNavigation from "../Components/DestinationNavigation";
import "./Crew.css";
import CrewNav from "../Components/CrewNav";

const CrewPage = () => {
  const { member } = useParams();
  const thisData = data.crew.find(
    (adat) => adat.name.toLowerCase().replace(/ /g, "") === member
  );
  console.log(thisData);
  return (
    <div className="crew-page">
      <div className="c-page-title">
        <h1>02</h1>
        <h1>Meet your crew</h1>
      </div>
      <div className="c-container">
        <div className="c-container-left">
          <h2>{thisData.role}</h2>
          <h1>{thisData.name}</h1>
          <p>{thisData.bio}</p>
          <CrewNav />
        </div>
        <div className="c-container-right">
          {" "}
          <img src={`..${thisData.images.png.slice(1)}`}></img>
        </div>
      </div>
    </div>
  );
};
export default CrewPage;
