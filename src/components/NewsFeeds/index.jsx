import React, { Component } from "react";
import News from "../News";
import "./style.css";
import store from "../../store";

class NewsFeeds extends Component {
  state = {
    data: []
  };

  updatelocalState = () => {
    const newdata = store.getState();
    console.log("new data ", newdata.feeds);
    this.setState({ data: newdata.feeds });
  };

  // componentDidMount() {
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
  //       this.setState({ data: res.articles });
  //     });
  // }

  render() {
    return (
      <div className="container">
        <button onClick={this.updatelocalState}>Load news</button>
        <div className="news-feeds">
          {this.state.data != null
            ? this.state.data.map(feed => <News data={feed} />)
            : null}
        </div>
      </div>
    );
  }
}

export default NewsFeeds;
