import { Link } from "react-router-dom";
import ImgCapsule from "../technology-assets/image-space-capsule-portrait.jpg";

const Capsule = () => {
  return (
    <div className="capsule-container">
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="capsule__content-bx">
        <div className="content">
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link>
            <Link to="/technology/spaceport">2</Link>
            <Link to="/technology/capsule">3</Link>
          </div>
          <div className="content__details">
            <h3>
              <span>The terminology...</span>space capsule
            </h3>

            <p>
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
        </div>
        <div className="img-bx">
          <img src={ImgCapsule} />
        </div>
      </div>
    </div>
  );
};

export default Capsule;
