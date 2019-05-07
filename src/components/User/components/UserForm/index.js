import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../../actions/user'

// antd 
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';

class UserForm extends Component {

  HandleChange(event) {
    const { setDados } = this.props
    const { name, value } = event.target;

    setDados(name, value);
  }

  saveUser() {
    const { postUser, user } = this.props

    postUser(user)
  }

  render() {
    const { user } = this.props
    return (
      <>
        <Form>
          <Row>
            <Col span={12}>
              <Form.Item>
                <h5>Form {this.props.match.params.id}</h5>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Nome Completo">
                <Input value={user.name} name="name" onChange={this.HandleChange.bind(this)}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="E-mail">
                <Input value={user.email} name="email" onChange={this.HandleChange.bind(this)}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Nome de Usuário">
                <Input value={user.username} name="username" onChange={this.HandleChange.bind(this)}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Senha">
                <Input.Password alue={user.password} name="password" onChange={this.HandleChange.bind(this)}></Input.Password>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={this.saveUser.bind(this)} >Salvar</Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);