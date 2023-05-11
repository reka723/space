import { NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import "./DestNav.css";

const TechnologyNav = () => {
  const navi = data.technology.map((tech) => {
    const name = tech.name.toLowerCase().replace(/ /g, "");
    return (
      <li key={tech.name}>
        <NavLink relative="path" to={`/technology/${name}`}>
          <div className="planet">{tech.name}</div>
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul style={{ flexDirection: "column" }} className="dest-list">
        {navi}
      </ul>
    </nav>
  );
};
export default TechnologyNav;
