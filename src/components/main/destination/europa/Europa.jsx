import europaImg from "../destination-assets/image-europa.png";
import {Link} from "react-router-dom";
import "./europa.css";

const Europa = () => {
  return (
    <div className="europa-container">
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div className="destination__content-bx">
        <div className="left">
          <img src={europaImg} />
        </div>
        <div className="right">
          <ul className="tab-bx">
          <li>
                <Link to="/destination/moon">Moon</Link>
              </li>
              <li>
                <Link to="/destination/mars">Mars</Link>
              </li>
              <li>
                <Link to="/destination/europa">Europa</Link>
              </li>
              <li>
                <Link to="/destination/titan">Titan</Link>
              </li>
          </ul>
          <h3>Europa</h3>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="more-details">
            <div className="left">
              <span className="avg-distance">avg. distance</span>
              <span className="avg-distance__value">628 MIL. km</span>
            </div>

            <div className="right">
              <span className="travel-time">est. travel time</span>
              <span className="avg-distance__value">3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Europa;