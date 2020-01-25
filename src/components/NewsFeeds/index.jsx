import React, { Component } from "react";
import News from "../News";
import "./style.css";
import newsApp from "../../reducer";
import { createStore } from "redux";
const store = createStore(newsApp);

class NewsFeeds extends Component {
  state = {
    data: []
  };

  componentDidMount() {
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
        this.setState({ data: res.articles });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("pokemons state has changed.");
    }
  }
  render() {
    return (
      <div className="news-feeds">
        {this.state.data != null
          ? this.state.data.map(feed => <News data={feed} />)
          : null}
      </div>
    );
  }
}

export default NewsFeeds;
