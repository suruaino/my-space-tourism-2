import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "./header-assets/logo.svg";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import "./header.css";


const Layer = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  const location = useLocation();

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 485);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // useEffect(() => {
  //   console.log('Current path:', location.pathname);
  // }, [location]);
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };


  return (
    <div className="layer">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {isMobile ? (
          <>
            <img
              className="menuBtn"
              src={showNav ? close : menu}
              alt="Menu Toggle"
              onClick={menuToggle}
            />
            {showNav && (
              <nav>
                <ul>
                  <li>
                    <Link to="/Home" onClick={menuToggle}>
                      <span>00</span> Home
                    </Link>
                  </li>
                  <li >
                    <Link to="/Destination" onClick={menuToggle}>
                      <span>01</span> Destination
                    </Link>
                  </li>
                  <li>
                    <Link to="/Crew" onClick={menuToggle}>
                      <span>02</span> Crew
                    </Link>
                  </li>
                  <li >
                    <Link to="/Technology" onClick={menuToggle}>
                      <span>03</span> Technology
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul>
              <li className={getNavLinkClass('/Home')}>
                <Link to="/Home">
                  <span>00</span> Home
                </Link>
              </li>
              <li className={getNavLinkClass('/Destination')}>
                <Link to="/Destination">
                  <span>01</span> Destination
                </Link>
              </li>
              <li className={getNavLinkClass('/Crew')}>
                <Link to="/Crew">
                  <span>02</span> Crew
                </Link>
              </li>
              <li className={getNavLinkClass('/Technology')}>
                <Link to="/Technology">
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Layer;
