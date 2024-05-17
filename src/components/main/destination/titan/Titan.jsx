import titanImg from "../destination-assets/image-titan.png";
import "./titan.css";

const Titan = () => {
    return(
        <div className="titan-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={titanImg} />
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
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
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
    )
}

export default Titan;