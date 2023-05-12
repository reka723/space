import { NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import "./CrewNav.css";

const CrewNav = () => {
  const location = useLocation();
  const navi = data.crew.map((member) => {
    const name = member.name.toLowerCase().replace(/ /g, "");
    return (
      <li key={member.name}>
        <NavLink
          relative="path"
          to={`/crew/${name}`}
          className={
            location.pathname.includes(`/crew/${name}`) ? "c-active" : ""
          }
        >
          <div className="crew-nav"></div>
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
