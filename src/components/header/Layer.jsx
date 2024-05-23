import React, { useState } from 'react';
import logo from "./header-assets/logo.svg";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Layer = () => {
  const [showNav, setShowNav] = useState(false);

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div className="layer">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <nav className={showNav ? 'open' : ''}>
    
          <ul>

            <li>
              <Link to="/Home" onClick={menuToggle}>
              {/* <input type="checkbox" /> */}
                <span>00</span> Home
              </Link>
            </li>

            <li>
              <Link to="/Destination" onClick={menuToggle}>
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link to="/Crew" onClick={menuToggle}>
                <span>02</span> Crew
              </Link>
            </li>
            <li>
              <Link to="/Technology" onClick={menuToggle}>
                <span>03</span> Technology
              </Link>
            </li> 
           </ul>

        </nav>
        <img 
          className='menuBtn' 
          src={showNav ? close : menu}
          alt="Menu Toggle"
          onClick={menuToggle}
        />
        <img className='closeBtn' src={close} alt="" />
      </header>
      <Outlet />
    </div>
  );
};

export default Layer;
