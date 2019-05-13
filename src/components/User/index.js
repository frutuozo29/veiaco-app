import React, { Component, Fragment } from "react";

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'

import { PageHeader, Table, Button } from "antd";

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Usuário",
    dataIndex: "username",
    key: "username"
  },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => (
      <>
        <Button shape="circle" hint="Teste" icon="edit" />
        <Button shape="circle" icon="delete" />
      </>
    )
  }
];

class Users extends Component {
  componentWillMount() {
    const { getUsers } = this.props

    getUsers()
  }

  render() {
    const { users, isGetting } = this.props
    return (
      <Fragment data-testid="user">
        <PageHeader title="Usuários" subTitle="Manutenção de novos usuários"></PageHeader>
        <Button type="primary" style={{ marginBottom: 5 }}><Link to="/createuser">Novo usuário</Link></Button>
        <Table loading={isGetting} rowKey="_id" columns={columns} dataSource={users} size="middle" />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  isGetting: user.isGetting,
  hasGetError: user.hasGetError,
  users: user.items
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users);
