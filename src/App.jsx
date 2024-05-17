import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Layer from "./components/header/Layer";
import Home from "./components/main/home/Home";
import Crew from "./components/main/crew/Crew";
import Destination from "./components/main/destination/Destination";
import Technology from "./components/main/technology/Technology";

import Mars from "./components/main/destination/mars/Mars";
import Europa from "./components/main/destination/europa/Europa";

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
        <Route exact path="/Home" element={<Home />} />
        <Route path="/destination/*" element={<Destination />}>
          <Route path="Mars" component={ Mars } />
          <Route path="Europa" component={ Europa } />
        </Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Route>
      <Route path="*" element={<ErrorMsg />}></Route>
    </Routes>
  );
}

export default App;
