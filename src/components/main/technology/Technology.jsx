import imageLaunch from "./technology-assets/image-launch-vehicle-portrait.jpg";
import spaceport from "./technology-assets/image-spaceport-portrait.jpg";
import capsule from "./technology-assets/image-space-capsule-portrait.jpg";
import "./technology.css";
// import Header from "../../header/Header.js";

const Technology = () => {
  return (
    <div className="technology">
      {/* <Header /> */}
      <div className="launch-container">
        <h2>
          <span>03</span> Space launch 101
        </h2>
        <div className="launch__content-bx">
          <div className="content">
            <div className="content__indicator">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className="content__details">
              <h3>
                <span>The terminology...</span>LAUNCH VEHICLE
              </h3>

              <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!.
              </p>
            </div>
          </div>
          <div className="img-bx">
            <img src={imageLaunch} />
          </div>
        </div>
      </div>


      <div className="spaceport-container">
        <h2>
          <span>03</span> Space launch 101
        </h2>
        <div className="spaceport__content-bx">
          <div className="content">
            <div className="content__indicator">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className="content__details">
              <h3>
                <span>The terminology...</span>spaceport
              </h3>

              <p>
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
              </p>
            </div>
          </div>
          <div className="img-bx">
            <img src={spaceport} />
          </div>
        </div>
      </div>


      <div className="capsule-container">
        <h2>
          <span>03</span> Space launch 101
        </h2>
        <div className="capsule__content-bx">
          <div className="content">
            <div className="content__indicator">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div className="content__details">
              <h3>
                <span>The terminology...</span>space capsule
              </h3>

              <p>
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
              </p>
            </div>
          </div>
          <div className="img-bx">
            <img src={capsule} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Technology;
