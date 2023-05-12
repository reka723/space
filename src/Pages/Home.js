import "./Home.css";
import data from "../data.json";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>
          {`Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!`}
        </p>
      </div>
      <NavLink to="/destination/moon" className="home-button">
        Explore
      </NavLink>
    </div>
  );
};
export default HomePage;
