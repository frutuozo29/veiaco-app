import React, { useEffect } from 'react'

// i18n
import i18next from 'i18next'

// react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// styles
import { GlobalStyle, Container } from './styles'
import Main from '../Main'

export const App = () => {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const lng = params.get('lng')

    lng && i18next.changeLanguage(lng)
  }, [])

  return (
    <Container>
      <GlobalStyle />
      <Main />
      <ToastContainer autoClose={5000} />
    </Container>
  )
}

export default App
