import { NavLink } from "react-router-dom";
import data from "../data.json";
import "./DestNav.css";
const DestinationNavigation = () => {
  const navi = data.destinations.map((destination) => {
    const name = destination.name.toLowerCase();
    console.log(name);
    return (
      <li key={destination.name}>
        <NavLink relative="path" to={`../${name}`}>
          {destination.name}
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
