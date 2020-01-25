import React, { Component } from "react";
import Header from "../Header";
import NewsFeeds from "../NewsFeeds";
class MainScreen extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <NewsFeeds />
      </div>
    );
  }
}

export default MainScreen;
