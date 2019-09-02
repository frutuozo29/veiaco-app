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
          <h2>Welcome, Renan Frutuozo</h2>
          <span>User: frutuozo29</span>
        </div>
        <ul>
          <li>Moviments</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </Menu>
      <Content />
    </Container>
  )
}

export default Dashboard
