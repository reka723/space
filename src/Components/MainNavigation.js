import "./MainNavigation.css";
import logo from "../Assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const MainNavigation = () => {
  const location = useLocation();
  var activeNumber = 0;
  return (
    <header className="header">
      <img className="logo" alt="logo" src={logo} />
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
            <div className="nav-element">
              <p>02</p>
              <p>Crew</p>
            </div>
          </li>
          <li>
            <div className="nav-element">
              <p>03</p>
              <p>Technology</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
