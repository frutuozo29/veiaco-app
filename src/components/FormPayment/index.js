import React, { useEffect } from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import { getFormPayments } from '../../actions/formPayment'

// Styles
import { Container, Title } from './styles'

// components
import Button from '../shared/Button'

export const FormPayment = ({ history }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { items: formPayments } = useSelector(({ formPayment }) => formPayment)
  useEffect(() => {
    dispatch(getFormPayments())
  }, [])

  return (
    <Container>
      <Title>{t('formPayment.title')}</Title>
      <div>
        <Button
          width='96px'
        >
          Add New
        </Button>
      </div>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
          {formPayments.map(({ name, typePayment }) => (
            <tr>
              <td>{name}</td>
              <td>{typePayment}</td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  )
}

export default FormPayment
