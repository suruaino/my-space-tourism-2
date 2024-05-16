import "./App.css";
import { Route, Routes } from "react-router-dom";


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
        <Route path="/" element={ <Home />}></Route>
        <Route path="/about" element={ <About />}>
          
        </Route>
      </Routes>
  
  );
}

export default App;
