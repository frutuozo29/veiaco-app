import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// translations
import './i18n'

// Service Worker
import * as serviceWorker from './serviceWorker'

// Components
import App from './components/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

serviceWorker.register()
