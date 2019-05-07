import { apiBaseUrl } from '../actions'

export const getUsersRequest = () => ({ type: 'GET_USERS_REQUEST' })

export const getUsersSucess = (response) => ({ type: 'GET_USERS_SUCCESS', payload: response })

export const getUsersError = () => ({ type: 'GET_USERS_ERROR' })

export const getUsers = () => (dispacth) => {
  dispacth(getUsersRequest())

  return fetch(`${apiBaseUrl}/user`)
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(response => dispacth(getUsersSucess(response)))
    .catch(() => dispacth(getUsersError()))
}

export const setDados = (key, value) => ({
  type: 'SET_DADOS',
  key,
  value
})

export const postRequest = () => ({ type: 'POST_REQUEST' })

export const postSucess = (response) => ({ type: 'POST_SUCCESS', payload: response })

export const postError = () => ({ type: 'POST_ERROR' })

export const postUser = (user) => (dispacth) => {
  dispacth(postRequest())
  const body = { ...user }

  return fetch(`${apiBaseUrl}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) throw Error()

      return response
    })
    .then(response => response.json())
    .then(response => dispacth(postSucess(response)))
    .catch(() => dispacth(postError()))
}
