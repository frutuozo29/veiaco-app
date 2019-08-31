const initialState = {
  loading: false,
  error: false,
  token: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      const token = window.sessionStorage.getItem('token') || ''
      return {
        ...state,
        token
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default user
