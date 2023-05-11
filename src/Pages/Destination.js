import { useLoaderData, useParams } from "react-router";
import data from "../data.json";
import DestinationNavigation from "../Components/DestinationNavigation";
import "./Destination.css";

const DestinationPage = () => {
  const { planet } = useParams();
  const thisData = data.destinations.find(
    (adat) => adat.name.toLowerCase() === planet
  );
  console.log(thisData);
  return (
    <div className="page">
      <DestinationNavigation />
      <h1>DESTINATION</h1>
      <h2>{thisData.description}</h2>
    </div>
  );
};
export default DestinationPage;
