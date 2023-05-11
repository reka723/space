import "./MainNavigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const MainNavigation = () => {
  const location = useLocation();
  var activeNumber = 0;
  return (
    <header className="header">
      <img className="logo" alt="logo" src="/assets/shared/logo.svg" />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/" end>
              <div className="nav-element">
                <p>00</p>
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination/moon"
              className={
                location.pathname.includes(`/destination/`) ? "active" : ""
              }
            >
              <div className="nav-element">
                <p>01</p>
                <p>Destination</p>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/crew/douglashurley"
              className={location.pathname.includes(`/crew/`) ? "active" : ""}
            >
              <div className="nav-element">
                <p>02</p>
                <p>Crew</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology/launchvehicle"
              className={
                location.pathname.includes(`/technology/`) ? "active" : ""
              }
            >
              <div className="nav-element">
                <p>03</p>
                <p>Technology</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
