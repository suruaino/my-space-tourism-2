import { Link } from "react-router-dom";
import ImgLaunch from "../technology-assets/image-launch-vehicle-portrait.jpg";

const Launch = () => {
  return (
    <div className="launch-container">
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="launch__content-bx">
        <div className="content">
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link>
            <Link to="/technology/spaceport">2</Link>
            <Link to="/technology/capsule">3</Link>
          </div>
          <div className="content__details">
            <h3>
              <span>The terminology...</span>LAUNCH VEHICLE
            </h3>

            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!.
            </p>
          </div>
        </div>
        <div className="img-bx">
          <img src={ImgLaunch} />
        </div>
      </div>
    </div>
  );
};

export default Launch;
