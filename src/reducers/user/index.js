const initialState = {
  loading: false,
  error: false,
  token: '',
  user: {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      const token = window.localStorage.getItem('veiaco-token') || ''
      return {
        ...state,
        token
      }
    case 'SET_TOKEN':
      window.localStorage.setItem('veiaco-token', action.token)
      return {
        ...state,
        token: action.token
      }
    case 'LOGIN_REQUEST':
    case 'CHECK_TOKEN_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        user: action.user
      }
    case 'LOGIN_ERROR':
    case 'CHECK_TOKEN_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }
    case 'CHECK_TOKEN_SUCCESS':
      return {
        ...state,
        token: action.token,
        user: action.user
      }
    case 'LOGOUT':
      window.localStorage.removeItem('veiaco-token')
      return {
        ...state,
        token: ''
      }
    default:
      return state
  }
}

export default user
