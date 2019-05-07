import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

class MenuApp extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div style={{ marginTop: 20, textAlign: "center" }} >
          <Avatar size={this.state.collapsed ? 30 : 90} icon="user" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="form" />
                <span>Cadastro</span>
              </span>
            }
            className="menuitem"
          >
            <Menu.Item key="1">
              <Link to="/dashboard">Receitas</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="">Despesas</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="3" className="menuitem">
            <Icon type="desktop" />
            <span>Movimentação</span>
          </Menu.Item>
          <Menu.Item key="4" className="menuitem">
            <Icon type="user" />
            <span>Usuários</span>
            <Link to="/user" />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MenuApp;
