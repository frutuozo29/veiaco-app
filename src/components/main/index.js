import React, { Component } from "react";
import { Layout } from "antd";
import SiderMenu from "../siderMenu";
import ContentApp from "../contentApp";

import { BrowserRouter as Router } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <SiderMenu />
          <Layout>
            <ContentApp />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Main;
