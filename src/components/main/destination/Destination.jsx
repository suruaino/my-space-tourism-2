import moon from "./destination-assets/image-moon.png";
import "./destination.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Moon from "./moon/Moon";

const Destination = () => {

  return (
    <div className="destination">
      {/* < Moon /> */}

       


      <Outlet />
    </div>
  );
};

export default Destination;
