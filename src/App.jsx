import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import Layer from "./components/header/Layer";
import Home from "./components/main/home/Home";
import Crew from "./components/main/crew/Crew";
import Destination from "./components/main/destination/Destination";
import Technology from "./components/main/technology/Technology";

import Moon from "./components/main/destination/moon/Moon";
import Mars from "./components/main/destination/mars/Mars";
import Europa from "./components/main/destination/europa/Europa";
import Titan from "./components/main/destination/titan/Titan";


const ErrorMsg = () => {
  return (
    <section
      className="error-message"
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>
        404 Error <br /> Page not found
      </h2>
      <Link to="/Home">Back to home</Link>
    </section>
  );
};

const App = () => {

    // const navigate = useNavigate();
    const [showMoon, setShowMoon] = useState(true);
  
    // const handleLinkClick = (destination) => {
    //   if (destination !== "moon") {
    //     setShowMoon(false);
    //   }
    // };

    const handleLinkClick = () => {
      if (destination !== "moon") {
        setShowMoon(false);
      }
    };

  return (
    <Routes>
      <Route path="/" element={<Layer />}>
        <Route index element={<Navigate to="home" />} />
        {showMoon && <Route path="moon" element={<Moon />} />}
        <Route path="/home" element={<Home />} />
        <Route path="/destination/*" element={<Destination />}>
          <Route index element={<Navigate to="moon" />} />
          <Route path="moon" element={<Moon />} />  
          <Route path="mars" element={<Mars />} /*onClick={() => handleLinkClick("mars")}*/ />
          <Route path="europa" element={<Europa />} /*onClick={() => handleLinkClick("europa")}*/ />
          <Route path="titan" element={<Titan />} /*onClick={() => handleLinkClick("titan")} *//>
        </Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Route>
      <Route path="*" element={<ErrorMsg />}></Route>
    </Routes>
  );
}

export default App;
