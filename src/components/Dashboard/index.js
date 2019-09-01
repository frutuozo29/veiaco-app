import React from 'react'

// react-redux
import { useDispatch } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// logo
import logo from '../../assets/veiacoLogo.svg'

// styles
import { Container, Topbar, Menu, Content } from './styles'

export const Dashboard = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Topbar>
        <img src={logo} alt='logo do veiaco' />
        <h1>Veiaco</h1>
        <a href='/' onClick={() => dispatch(userActions.logout())}>Logout</a>
      </Topbar>
      <Menu>
        <div>
          <h2>Bem vindo, Renan</h2>
          <span>Usuário: frutuozo29</span>
        </div>
        <ul>
          <li>Movimentos</li>
          <li>Usuário</li>
          <li>Configurações</li>
        </ul>
      </Menu>
      <Content />
    </Container>
  )
}

export default Dashboard
