import React, { Component } from "react";
import Selection from "../Selection";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import "./style.css";

class Menu extends Component {
  state = {
    clicked: false
  };

  toggleList() {
    const prevState = this.state.clicked;
    this.setState({ clicked: !prevState });
  }

  render() {
    const { listItem, listName } = this.props;
    const { clicked } = this.state;
    return (
      <div className="menu">
        <div
          className="selection-title"
          onClick={() => this.toggleList()} // passed as a function to bind this or use a constructor to bind this
          id={listName}
        >
          {listName} {clicked ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </div>
        {clicked ? listItem.map(item => <Selection name={item} />) : null}
      </div>
    );
  }
}

export default Menu;
