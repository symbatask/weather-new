import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, {useState} from "react";

const App = () => {
  const [city, setCity] = useState("Bishkek")


  return (
    <div>
      
      <Router>
      <Header setCity = {setCity} />
      <Routes>
        <Route path="/" element={<Home city={city} />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
