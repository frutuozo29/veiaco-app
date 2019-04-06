import React, { Component } from "react";
import "./contentApp.css";
import Routes from "../../routes";
import { Layout, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

class ContentApp extends Component {
  render() {
    return (
      <div>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} className="menuitem">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Renan Frutuozo ©2019</Footer>
      </div>
    );
  }
}

export default ContentApp;
