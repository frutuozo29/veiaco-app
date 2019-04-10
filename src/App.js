import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Layout, Breadcrumb } from "antd";
import SiderMenu from "./components/siderMenu";
import Routes from "./routes";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout style={{ minHeight: "100vh" }}>
            <SiderMenu />
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }} />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }} className="menuitem">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  style={{ padding: 24, background: "#fff", minHeight: 360 }}
                >
                  <Routes match={this.props.match} />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Renan Frutuozo ©2019
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
