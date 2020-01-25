import React from "react";
import Sidebar from "./components/SideBar";
import MainScreen from "./components/MainScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
