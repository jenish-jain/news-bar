import React from "react";
import Sidebar from "./components/SideBar";
import MainScreen from "./components/MainScreen";
import "./App.css";
// import { createStore } from "redux";
// import newsApp from "./reducer";
// import {
//   SELECT_CATEGORY,
//   SELECT_COUNTRY,
//   select_category,
//   select_country
// } from "./actions";

// const store = createStore(newsApp);
// store.dispatch(select_category("health"));
// console.log(store.getState()); // checking for store

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
