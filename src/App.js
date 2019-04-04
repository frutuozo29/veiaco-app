import React, { Component } from "react";
import "./App.css";
import Main from "./common/main/index";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Routes />
      </div>
    );
  }
}

export default App;
