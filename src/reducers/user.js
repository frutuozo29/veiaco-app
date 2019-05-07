const initialState = {
  isGetting: false,
  hasGetError: false,
  isPosting: false,
  hasPostError: false,
  items: [],
  user: {
    _id: null,
    name: '',
    email: '',
    username: '',
    password: ''
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DADOS':
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value
        }
      }
    case 'GET_USERS_REQUEST':
      return {
        ...state,
        isGetting: true,
        hasGetError: false
      }
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        isGetting: false,
        hasGetError: false,
        items: action.payload.users
      }
    case 'GET_USERS_ERROR':
      return {
        ...state,
        isGetting: false,
        hasGetError: true,
        items: []
      }
    case 'POST_REQUEST':
      return {
        ...state,
        isPosting: true,
        hasPostError: false
      }
    case 'POST_SUCCESS':
      return {
        ...state,
        isPosting: false,
        hasPostError: false,
        user: {}
      }
    case 'POST_ERROR':
      return {
        ...state,
        isPosting: false,
        hasPostError: true
      }
    default:
      return state
  }
}

export default user
