import React, { Component } from "react";
import "./style.css";

class News extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="news">
        <div className="news-header">
          <div className="title">{data.title}</div>
          <div className="source">
            <b>Source : </b>
            {data.source.name}
          </div>
        </div>
        <div className="news-body">
          <img
            src={data.urlToImage}
            alt={data.description}
            className="news-image"
          />
          <div className="news-content">{data.content}</div>
          <p>Link to complete article : </p> <a href={data.url}>{data.url}</a>
        </div>
        <div className="news-footer">
          <div className="news-footer-content">
            <span>
              <b>Published At : </b>
            </span>{" "}
            <span>{data.publishedAt}</span>
          </div>
          <div className="news-footer-content">
            <span>
              <b>Author: </b>
            </span>{" "}
            <span>{data.author}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

// {
//     -"source": {
//     "id": null,
//     "name": "Click2houston.com"
//     },
//     "author": "Daniela Sternitzky-Di Napoli, Aaron Barker",
//     "title": "2 people killed in explosion that rocked northwest Houston - KPRC Click2Houston",
//     "description": "Two people were killed early Friday morning in an explosion that shook northwest Houston awake.",
//     "url": "https://www.click2houston.com/news/local/2020/01/24/large-explosion-causes-buildings-home-to-rattle-in-west-houston-police-say/",
//     "urlToImage": "https://www.click2houston.com/resizer/ThZ8H4Ca6XgFHe092oqNOXWlBA0=/1600x900/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/d1vhqlrjc8h82r.cloudfront.net/01-24-2020/t_c9b1f01fdf884d509f2675fc8e73a678_name_image.jpg",
//     "publishedAt": "2020-01-24T16:11:00Z",
//     "content": "HOUSTON Two people were killed early Friday morning in an explosion that shook northwest Houston awake.\r\nThe blast was reported about 4:20 a.m. at Watson Valve Services near the corner of Gessner and Clay Roads.\r\nHouston fire Chief Sam Peña said at least one … [+2882 chars]"
//     },
