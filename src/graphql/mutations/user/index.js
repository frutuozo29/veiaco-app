import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        name
        email
        username
      },
      token
    }
  }  
`

export const CHECK_TOKEN = gql`
  mutation checkToken($token: String!){
    checkToken(token: $token) {
      user {
        name
        email
        username
      }
      token
    }
  }
`
