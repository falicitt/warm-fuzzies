import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css'

import reducers from './reducers'
import App from './components/App'

<<<<<<< HEAD
<<<<<<< HEAD
// import { ReactDOM } from 'react'
=======
// import ReactDOM from 'react-dom'
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
=======
>>>>>>> d258150af6245420edc22667f6a48f52f2467341
import { BrowserRouter as Router } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
