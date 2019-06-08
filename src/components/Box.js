import React from "react";

import "./styles.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(result => {
        return result.json();
      })
      .then(data => {
        const ran = Math.floor(Math.random() * data.quotes.length);
        console.log(ran);
        console.log(data.quotes[ran]);
        console.log(data.quotes[ran].quote);
        console.log(data.quotes[ran].author);
        this.setState({
          quote: data.quotes[ran].quote,
          author: data.quotes[ran].author
        });
      });
  };

  render() {
    return (
      <div id="quote-box" className="container">
        <div className="box-container container">
          <div className="text-center">
            <h1 id="text">{this.state.quote}</h1>
          </div>
          <div className="float-right">
            <p id="author">
              <span>- </span>
              {this.state.author}
            </p>
          </div>
        </div>
        <div
          className="box-item"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
          <div className="row">
            <div className="col-sm-6">
              <a href="www.twitter.com/intent/tweet" id="tweet-quote">
                Twitter
              </a>
            </div>
            <div className="col-sm-6">
              <button
                id="new-quote"
                className="float-right btn btn-primary"
                onClick={this.fetchData}
              >
                next quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
