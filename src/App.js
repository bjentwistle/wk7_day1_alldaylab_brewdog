import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
//import BrewdogContainer from './containers/BrewdogContainer';
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import './App.css';


function App() {


  return (
    <div className="App">
    <Router>
      <NavBar />
      <Routes> 
        <Route path = "/" element= {<Home/>} />
        <Route path = "/Contacts" element= {<Contacts/>} />
        <Route path = "/Shop" element= {<Shop/>} />
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
