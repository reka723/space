import { NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import "./TechnologyNav.css";

const TechnologyNav = () => {
  var number = 0;
  const location = useLocation();
  const navi = data.technology.map((tech) => {
    const name = tech.name.toLowerCase().replace(/ /g, "");
    number++;
    return (
      <li key={tech.name}>
        <NavLink
          relative="path"
          to={`/technology/${name}`}
          className={
            location.pathname.includes(`/technology/${name}`) ? "t-active" : ""
          }
        >
          <div className="tech-nav">{number}</div>
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
