import React from "react";
import "./App.css";
import Makerpage from "./Makerpage";

const App = () => {
  return (
    
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Makerpage />
    </div>
  )
}

export default App;
//GET https://api.nasa.gov/planetary/apod

