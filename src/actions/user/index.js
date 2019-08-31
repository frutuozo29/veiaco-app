import { apiBaseUrl } from '../../actions'

// graphql
import graphqlClient from '../../graphql/graphqlClient'
import { login } from '../../graphql/mutations/user'

export const loginRequest = () => ({ type: 'LOGIN_REQUEST' })

export const loginSuccess = (token) => ({ type: 'SET_TOKEN', token })

export const loginError = () => ({ type: 'LOGIN_ERROR' })

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginRequest())

  return graphqlClient(apiBaseUrl, login(username, password))
    .then(({ login: token }) => {
      dispatch(loginSuccess(token))
      console.log('sucesso', token)
    })
    .catch((error) => {
      dispatch(loginError())
      console.log('catch', error)
    })
}
