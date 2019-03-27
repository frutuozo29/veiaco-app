import React, { Component } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Button from "antd/lib/button";
import "./App.css";
import Sider from "./common/header/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sider />
          <Logo />
          <br />
          <Button type="primary">Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
