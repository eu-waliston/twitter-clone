import React from "react";
import "./App.css";


import MenuLeft from "./components/MenuLeft/MenuLeft";
import RightBar from "./components/RightBar/RightBar";
import Home from "./components/Home/Home";


const App = () => {
  return (
    <div className="App-Container">
      <Home />
      <RightBar /> 
      <MenuLeft />
           
    </div>
  )
}

export default App;