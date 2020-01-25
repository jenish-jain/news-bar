import React, { Component } from "react";
import Menu from "../Menu";
import "./style.css";
import { NEWS_CATEGORIES, COUNTRY_LIST } from "../constants";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <Menu listItem={NEWS_CATEGORIES} listName={"News Categories"} />
        <Menu listItem={COUNTRY_LIST} listName={"Countries"} />
      </div>
    );
  }
}

export default SideBar;
