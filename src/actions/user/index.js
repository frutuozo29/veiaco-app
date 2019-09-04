import { apiBaseUrl } from '../../actions'

// i18n
import i18n from 'i18next'

// graphql
import graphqlClient from '../../graphql/graphqlClient'
import { login } from '../../graphql/mutations/user'

// react toastify
import { toast } from 'react-toastify'

export const getToken = () => ({ type: 'GET_TOKEN' })

export const setToken = (token) => ({ type: 'SET_TOKEN', token })

export const loginRequest = () => ({ type: 'LOGIN_REQUEST' })

export const loginSuccess = (user) => ({ type: 'LOGIN_SUCCESS', user })

export const loginError = () => ({ type: 'LOGIN_ERROR' })

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginRequest())

  return graphqlClient(apiBaseUrl, login(username, password))
    .then(({ login: { token, user } }) => {
      dispatch(setToken(token))
      dispatch(loginSuccess(user))
    })
    .catch(() => {
      dispatch(loginError())
      toast.error(i18n.t('login.actions.login_error'))
    })
}

export const logout = () => ({ type: 'LOGOUT' })
