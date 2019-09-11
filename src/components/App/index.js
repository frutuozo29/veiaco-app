import React, { useEffect } from 'react'

// i18n
import i18next from 'i18next'

// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import { getToken, checkToken } from '../../actions/user'

// Routes
import Routes from '../../routes'

// styles
import { GlobalStyle, Container } from './styles'

export const App = () => {
  const dispatch = useDispatch()
  const [token, user] = useSelector(({ user: { token, user } }) => [token, user])

  useEffect(() => {
    !token && dispatch(getToken())
  }, [])

  useEffect(() => {
    user && Object.keys(user).length === 0 && token && dispatch(checkToken(token))
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
