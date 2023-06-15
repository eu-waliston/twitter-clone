import React from "react";
import "./App.css";


import MenuLeft from "./components/MenuLeft/MenuLeft";
import RightBar from "./components/RightBar/RightBar";


const App = () => {
  return (
    <div className="App-Container">
      <RightBar /> 
      <MenuLeft />
           
    </div>
  )
}

export default App;