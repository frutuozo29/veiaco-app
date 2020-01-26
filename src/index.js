import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// apollo client
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// translations
import './i18n'

// Service Worker
import * as serviceWorker from './serviceWorker'

// Components
import App from './components/App'

const client = new ApolloClient({
  uri: process.env.NODE_ENV !== 'production' ? 'http://localhost:8010' : 'https://veiaco-api.herokuapp.com',
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = localStorage.getItem('veiaco-token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

client.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('veiaco-token'),
    isMenuOpen: true
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.register()
