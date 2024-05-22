import React, { useState } from 'react';
import logo from "./header-assets/logo.svg";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Layer = () => {

  const [showNav, setShoNav] = useState(false);

  const menuToggle = (index) => {
    setShoNav(true);
  };
  return (
    <div className="layer">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <nav>
    
          <ul>

            <li>
              <Link to="/Home">
              {/* <input type="checkbox" /> */}
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
        <img className='menuBtn' src={menu} alt="" />
        <img className='closeBtn' src={close} alt="" />
      </header>
      <Outlet />
    </div>
  );
};

export default Layer;
