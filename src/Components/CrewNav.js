import { NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import "./DestNav.css";

const CrewNav = () => {
  const navi = data.crew.map((member) => {
    const name = member.name.toLowerCase().replace(/ /g, "");
    return (
      <li key={member.name}>
        <NavLink relative="path" to={`/crew/${name}`}>
          <div className="planet">{member.name}</div>
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
export default CrewNav;
