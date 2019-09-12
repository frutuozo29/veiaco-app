import { apiBaseUrl } from '../../actions'

// i18n
import i18n from 'i18next'

// graphql
import graphqlClient from '../../graphql/graphqlClient'
import { mutationLogin, mutationCheckToken } from '../../graphql/mutations/user'

// react toastify
import { toast } from 'react-toastify'

export const getToken = () => ({ type: 'GET_TOKEN' })

export const setToken = (token) => ({ type: 'SET_TOKEN', token })

export const loginRequest = () => ({ type: 'LOGIN_REQUEST' })

export const loginSuccess = (user) => ({ type: 'LOGIN_SUCCESS', user })

export const loginError = () => ({ type: 'LOGIN_ERROR' })

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginRequest())

  return graphqlClient(apiBaseUrl, mutationLogin(username, password))
    .then(({ login: { token, user } }) => {
      dispatch(setToken(token))
      dispatch(loginSuccess(user))
    })
    .catch(() => {
      dispatch(loginError())
      toast.error(i18n.t('login.actions.login_error'))
    })
}

export const checkTokenRequest = () => ({ type: 'CHECK_TOKEN_REQUEST' })

export const checkTokenSuccess = (token, user) => ({ type: 'CHECK_TOKEN_SUCCESS', ...{ token, user } })

export const checkTokenError = () => ({ type: 'CHECK_TOKEN_ERROR' })

export const checkToken = (token) => (dispatch) => {
  dispatch(checkTokenRequest())

  return graphqlClient(apiBaseUrl, mutationCheckToken(token))
    .then(({ checkToken: { token, user } }) => {
      dispatch(checkTokenSuccess(token, user))
    })
    .catch(() => {
      dispatch(checkTokenError())
    })
}

export const logout = () => ({ type: 'LOGOUT' })
