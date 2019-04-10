const initialState = {
  users: [],
  userSelected: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "SET_USER_SELECTED":
      return {
        ...state,
        userSelected: action.payload
      };
    default:
      return state;
  }
};

export default user;
