import React, { useEffect } from 'react'

// i18n
import i18next from 'i18next'

// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// Routes
import Routes from '../../routes'

// styles
import { GlobalStyle, Container } from './styles'

export const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(({ user }) => user.token)

  useEffect(() => {
    !token && dispatch(userActions.getToken())
  }, [token])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const lng = params.get('lng')

    lng && i18next.changeLanguage(lng)
  }, [])

  return (
    <Container>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={5000} />
    </Container>
  )
}

export default App
