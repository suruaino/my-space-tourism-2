import { Link } from "react-router-dom";
import douglas from "./crew-assets/image-douglas-hurley.png";
import Mark  from "./crew-assets/image-mark-shuttleworth.png";
import Victor  from "./crew-assets/image-victor-glover.png";
import Anousheh  from "./crew-assets/image-anousheh-ansari.png";
import "./crew.css";


const Crew = () => {
  return (

    <div className="crew">

      <div className="commander-container">
        <div className="content-bx">
          <h2>
            <span>02 </span>meet your crew
          </h2>

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
              <Link to=""></Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
            </div>
        </div>
        <div className="right">
          <img src={douglas} />
        </div>
      </div>

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
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
            </p>

            
          </div>
          <div className="indicator">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
        </div>
        <div className="right">
          <img src={Mark} />
        </div>
      </div>


      <div className="pilot-container">
        <div className="content-bx">
          <h2>
            <span>02 </span>meet your crew
          </h2>

          <div className="left">
            <h3>
              <span>Pilot</span>Victor Glover
            </h3>

            <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
            </p>

            
          </div>
          <div className="indicator">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
        </div>
        <div className="right">
          <img src={Victor} />
        </div>
      </div>


      <div className="flight-engineer-container">
        <div className="content-bx">
          <h2>
            <span>02 </span>meet your crew
          </h2>

          <div className="left">
            <h3>
              <span>Flight Engineer</span>Anousheh Ansari
            </h3>

            <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  
            </p>

            
          </div>
          <div className="indicator">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
        </div>
        <div className="right">
          <img src={Anousheh} />
        </div>
      </div>


    </div>
  );
};

export default Crew;
