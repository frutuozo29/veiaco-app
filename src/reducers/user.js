const initialState = {
  isGetting: false,
  hasGetError: false,
  items: [],
  userSelected: {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default user
