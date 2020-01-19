import React from 'react'

// apollo client
import { useApolloClient } from '@apollo/react-hooks'

// Styles
import { Container, Title } from './styles'

export const Dashboard = () => {
  const client = useApolloClient()

  return (
    <Container data-testid='dashboard'>
      <Title>Dashboard</Title>
      <button
        data-testid="logout-button"
        onClick={() => {
          client.writeData({ data: { isLoggedIn: false } })
          localStorage.clear()
        }}
      >
        Logout
    </button>
    </Container>
  )
}

export default Dashboard
