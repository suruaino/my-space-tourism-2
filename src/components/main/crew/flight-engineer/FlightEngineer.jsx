import { Link } from "react-router-dom";
import Anousheh from "../crew-assets/image-anousheh-ansari.png";

const FlightEngineer = () => {
  return (
    <div className="flight-engineer-container">
        <h2>
          <span>02 </span>meet your crew
        </h2>
      <div className="content-bx">
      

        <div className="left">
          <h3>
            <span>Flight Engineer</span>Anousheh Ansari
          </h3>

          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
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
        <img src={Anousheh} />
      </div>
    </div>
  );
};

export default FlightEngineer;
