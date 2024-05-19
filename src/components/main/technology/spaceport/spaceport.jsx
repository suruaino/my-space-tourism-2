import { Link } from "react-router-dom";
import ImgSpaceport from "../technology-assets/image-spaceport-portrait.jpg";

const Spaceport = () => {
  return (
    <div className="spaceport-container">
      <h2>
        <span>03</span> Space launch 101
      </h2>
      <div className="spaceport__content-bx">
        <div className="content">
          <div className="content__indicator">
            <Link to="/technology/launch">1</Link>
            <Link to="/technology/spaceport">2</Link>
            <Link to="/technology/capsule">3</Link>
          </div>
          <div className="content__details">
            <h3>
              <span>The terminology...</span>spaceport
            </h3>

            <p>
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
        </div>
        <div className="img-bx">
          <img src={ImgSpaceport} />
        </div>
      </div>
    </div>
  );
};

export default Spaceport;
