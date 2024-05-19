import { Link } from "react-router-dom";
import Mark from "../crew-assets/image-mark-shuttleworth.png";

const MissionSpecialist = () => {
  return (
    <div className="mission-specialist-container">
      <div className="content-bx">
        <h2>
          <span>02 </span>meet your crew
        </h2>

        <div className="left">
          <h3>
            <span>Mission Specialist</span>MARK SHUTTLEWORTH
          </h3>

          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
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
        <img src={Mark} />
      </div>
    </div>
  );
};

export default MissionSpecialist;
