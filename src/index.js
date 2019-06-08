import React from "react";
import ReactDOM from "react-dom";
import Box from "./components/Box";
import "bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "red", height: "100vh", width: "100%" }}
        className="App"
      >
        <Box />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
