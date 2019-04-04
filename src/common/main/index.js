import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" className="menuitem">
              <Icon type="pie-chart" />
              <span>Cadastros</span>
            </Menu.Item>
            <Menu.Item key="2" className="menuitem">
              <Icon type="desktop" />
              <span>Movimentação</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Usuário</span>
                </span>
              }
              className="menuitem"
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" className="menuitem">
              <Icon type="file" />
              <span>Configurações</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }} className="menuitem">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Veiaco front-end
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Renan Frutuozo ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
