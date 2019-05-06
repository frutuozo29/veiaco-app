import React, { Component } from "react";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'

import { Table, Spin } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username"
  }
];

class Users extends Component {
  componentWillMount() {
    const { getUsers } = this.props

    getUsers()
  }

  render() {
    const { items, isGetting } = this.props
    return (
      <section>
        {(() => {
          if (isGetting)
            return <Spin tip="Loading..." size="large" />
          else
            return <Table rowKey="_id" columns={columns} dataSource={items} size="middle" />
        })()}
      </section>

    );
  }
}

const mapStateToProps = ({ user }) => ({
  isGetting: user.isGetting,
  hasGetError: user.hasGetError,
  items: user.items
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users);
