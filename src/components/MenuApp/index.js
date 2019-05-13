import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const MenuApp = () => {
  const [collapsed, setCollapsed] = useState(false)

    return (
      <Sider
        data-testid="menu-app"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div style={{ marginTop: 20, textAlign: "center" }} >
          <Avatar size={collapsed ? 30 : 90} icon="user" />
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

export default MenuApp;
