import React from "react";
import "./App.css";


import MenuLeft from "./components/Menu/Menu";
import Home from "./components/Home/Home";


const App = () => {
  return (
    <div className="App-Container">
      <Home />
      <MenuLeft />   
    </div>
  )
}

export default App;