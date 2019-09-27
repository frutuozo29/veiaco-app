import { apiBaseUrl } from '../../actions'

// i18n
import i18n from 'i18next'

// graphql
import graphqlClient from '../../graphql/graphqlClient'
import { formPayments } from '../../graphql/queries'

// react toastify
import { toast } from 'react-toastify'

export const getFormPaymentsRequest = () => ({ type: 'GET_FORM_PAYMENTS_REQUEST' })

export const getFormPaymentsSuccess = (formPayments) => ({ type: 'GET_FORM_PAYMENTS_SUCCESS', formPayments })

export const getFormPaymentsError = () => ({ type: 'GET_FORM_PAYMENTS_ERROR' })

export const getFormPayments = () => (dispatch) => {
  dispatch(getFormPaymentsRequest())

  return graphqlClient(apiBaseUrl, formPayments())
    .then(({ formPayments }) => dispatch(getFormPaymentsSuccess(formPayments)))
    .catch(() => {
      dispatch(getFormPaymentsError())
      toast.error(i18n.t('login.actions.login_error'))
    })
}
