import React, { Component } from "react";
import "./App.css";
import { Layout } from "antd";
import MenuApp from "./components/MenuApp";
import Routes from "./routes";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <MenuApp />
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "5px 16px" }}>
              <div
                style={{ padding: 24, background: "#fff", minHeight: 360 }}
              >
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Renan Frutuozo ©2019
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
