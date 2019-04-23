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