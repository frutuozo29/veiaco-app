import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMenu extends Component {
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
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Cadastro</span>
              </span>
            }
            className="menuitem"
          >
            <Menu.Item key="1">
              <Link to="/dashboard">Receitas</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/sobre">Despesas</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="3" className="menuitem">
            <Icon type="desktop" />
            <span>Movimentação</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;
