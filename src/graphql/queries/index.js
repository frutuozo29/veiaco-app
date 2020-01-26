import { gql } from 'apollo-boost'

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

export const IS_MENU_OPEN = gql`
  query IsMenuOpen {
    isMenuOpen @client
  }
`
