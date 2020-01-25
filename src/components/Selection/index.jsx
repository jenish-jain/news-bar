import React, { Component } from "react";
import "./style.css";
// import { createStore } from "redux";
// import newsApp from "../../reducer";
import { select_category, select_country, update_data } from "../../actions";
// const store = createStore(newsApp);

import store from "../../store";
class Selection extends Component {
  // state = {};

  // updateData = () => {
  //   const val = store.getState();
  //   console.log(val);
  //   const { category, country } = val;
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=431572ea093e4d7b8590b3a28d06f827`
  //   )
  //     .then(response => response.json())
  //     .then(res => {
  //       console.log(res);
  //       const newsarray = res.articles;
  //       console.log(newsarray);
  //       // this.setState({ data: res.articles });
  //       store.dispatch(update_data(newsarray));
  //       console.log("after update", store.getState()); // checking for store
  //     });
  // };

  handleClick = () => {
    console.log(this.props.type);
    const { name, type } = this.props;
    if (type === "News Categories") {
      store.dispatch(select_category(name));
      // updateData();
    } else if (type === "Countries") {
      store.dispatch(select_country(name));
      // updateData();
    }

    const val = store.getState();
    console.log(val);
    const { category, country } = val;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=431572ea093e4d7b8590b3a28d06f827`
    )
      .then(response => response.json())
      .then(res => {
        console.log(res);
        const newsarray = res.articles;
        console.log(newsarray);
        // this.setState({ data: res.articles });
        store.dispatch(update_data(newsarray));
        console.log("after update", store.getState()); // checking for store
      });

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
