import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return(
      <header>

          <div className="logo">
              {/* <img src={logo} alt="" /> */}
          </div>

          <nav>
          <ul>
          <li><Link to="/Home"><span>00</span> Home</Link></li>
            
              <li><Link to="/About"><span>01</span> Destination</Link></li>
              <li><Link to="#"><span>02</span> Crew</Link></li>
              <li><Link to="#"><span>03</span> Technology</Link></li>
          </ul>
          </nav>
  
      </header>
  )
}

const Home = () => {
  return <h1>I am Home</h1>
}

const About = () => {
  return (
    <>
      <h2>Emmanuel</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consequatur deserunt doloribus assumenda minus, totam libero accusamus consequuntur, commodi molestiae architecto, sed esse omnis! Quisquam necessitatibus adipisci architecto a ullam.
      </p>
    </>
  )
}


function App() {
  return (

      <Routes>
        <Route exact path="/" element={ <Header />}></Route>
        <Route path="/home" element={ <Home />}></Route>
        <Route path="/about" element={ <About />}></Route>
          
        
      </Routes>
  
  );
}

export default App;
