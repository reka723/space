import { NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import "./DestNav.css";

const DestinationNavigation = () => {
  const location = useLocation();
  const navi = data.destinations.map((destination) => {
    const name = destination.name.toLowerCase();
    console.log(location);
    return (
      <li key={destination.name}>
        <NavLink relative="path" to={`/destination/${name}`}>
          <div className="planet">{destination.name}</div>
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className="dest-list">{navi}</ul>
    </nav>
  );
};
export default DestinationNavigation;
