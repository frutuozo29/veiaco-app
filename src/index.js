import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Service Worker
import * as serviceWorker from './serviceWorker'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Components
import App from './components/App'

// Middlewares
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
