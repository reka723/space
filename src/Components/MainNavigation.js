import "./MainNavigation.css";
import logo from "../Assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
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
            <NavLink to="/destination/moon">
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
