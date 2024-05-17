import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layer />}>
        <Route exact path="/home" element={<Home />} />
        <Route path="/destination/*" element={<Destination />}>
          <Route path="moon" element={<Moon />} />  
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Route>
      <Route path="*" element={<ErrorMsg />}></Route>
    </Routes>
  );
}

export default App;
