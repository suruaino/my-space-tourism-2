import { Link } from "react-router-dom";
import douglas from "../crew-assets/image-douglas-hurley.png";

const Commander = () => {
  return (
    <div className="commander-container">
      <h2>
        <span>02 </span>meet your crew
      </h2>
      <div className="wrapper">
        <div className="content-bx">
          <div className="left">
            <h3>
              <span>Commander</span>Douglas Hurley
            </h3>

            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="indicator">
            <Link to="/crew/commander"></Link>
            <Link to="/crew/mission-specialist"></Link>
            <Link to="/crew/flight-engineer"></Link>
            <Link to="/crew/pilot"></Link>
          </div>
        </div>
        <div className="right">
          <img src={douglas} />
        </div>
      </div>
    </div>
  );
};

export default Commander;
