const initialState = {
  loading: false,
  error: false,
  items: []
}

const formPayment = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FORM_PAYMENTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      }
    case 'GET_FORM_PAYMENTS_SUCCESS':
      return {
        ...state,
        items: action.formPayments,
        loading: false,
        error: false
      }
    case 'GET_FORM_PAYMENTS_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default formPayment
