import logo from "./header-assets/logo.svg";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Layer = () => {
  return (
    <>
      <header>
        <div className="logo"><img src={logo} alt="" /></div>

        <nav>
          <ul>
            <li>
              <Link to="/Home">
                <span>00</span> Home
              </Link>
            </li>

            <li>
              <Link to="/Destination">
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link to="/Crew">
                <span>02</span> Crew
              </Link>
            </li>
            <li>
              <Link to="/Technology">
                <span>03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layer;
