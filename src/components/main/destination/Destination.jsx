import moon from "./destination-assets/image-moon.png";
import mars from "./destination-assets/image-mars.png";
import europa from "./destination-assets/image-europa.png";
import titan from "./destination-assets/image-titan.png";
import "./destination.css";
// import Header from "../../header/Header.js";
const Destination = () => {
  return (
    
    <div className="destination">
      {/* <Header /> */}

      <div className="moon-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={moon} />
          </div>
          <div className="right">
            <ul className="tab-bx">
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <h3>Moon</h3>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="more-details">
              <div className="left">
                <span className="avg-distance">avg. distance</span>
                <span className="avg-distance__value">384,400km</span>
              </div>

              <div className="right">
                <span className="travel-time">est. travel time</span>
                <span className="avg-distance__value">3 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mars-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={mars} />
          </div>
          <div className="right">
            <ul className="tab-bx">
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <h3>Mars</h3>
            <p>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <div className="more-details">
              <div className="left">
                <span className="avg-distance">avg. distance</span>
                <span className="avg-distance__value">225 MIL. km</span>
              </div>

              <div className="right">
                <span className="travel-time">est. travel time</span>
                <span className="avg-distance__value">9 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="europa-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={europa} />
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
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
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


      <div className="titan-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={titan} />
          </div>
          <div className="right">
            <ul className="tab-bx">
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
            <h3>Titan</h3>
            <p>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
            </p>
            <div className="more-details">
              <div className="left">
                <span className="avg-distance">avg. distance</span>
                <span className="avg-distance__value">1.6 BIL. km</span>
              </div>

              <div className="right">
                <span className="travel-time">est. travel time</span>
                <span className="avg-distance__value">7 years</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Destination;
