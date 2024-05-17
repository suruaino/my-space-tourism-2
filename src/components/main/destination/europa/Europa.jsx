import europaImg from "../destination-assets/image-europa.png";
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
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
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