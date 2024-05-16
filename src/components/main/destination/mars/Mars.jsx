import marsImg from "../destination-assets/image-mars.png";
import "./mars.css";


const Mars = () => {

  
    return (
      <div className="mars-container">
        <h2>
          <span>01</span> Pick your destination
        </h2>
        <div className="destination__content-bx">
          <div className="left">
            <img src={marsImg} />
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
    );
  };

  export default Mars;