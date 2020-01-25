import React, { Component } from "react";
import "./style.css";
import { createStore } from "redux";
import newsApp from "../../reducer";
import { select_category, select_country } from "../../actions";
const store = createStore(newsApp);
class Selection extends Component {
  state = {};

  handleClick = () => {
    console.log(this.props.type);
    const { name, type } = this.props;
    if (type === "News Categories") {
      store.dispatch(select_category(name));
    } else if (type === "Countries") {
      store.dispatch(select_country(name));
    }
    console.log(store.getState()); // checking for store
  };

  render() {
    return (
      <div
        className="selection"
        type={this.props.type}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Selection;
