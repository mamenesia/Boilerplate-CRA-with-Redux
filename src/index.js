import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import jwt from 'jsonwebtoken'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './modules'
import { AUTHENTICATED, UNAUTHENTICATED } from './modules/auth/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

const jwtPass = 'CGqud32Ab0dQRSfQ2F4qbQyutJr1'
const token = localStorage.getItem('token')

const invalidValues = [undefined, null, '']

let getToken = ''
if (token !== null) {
  const splitToken = token.split(' ')
  if (splitToken.length === 2) {
    ;[, getToken] = splitToken
  }
}

jwt.verify(getToken, jwtPass, (err, data) => {
  // console.log(err, data);
  if (!invalidValues.includes(data)) {
    store.dispatch({ type: AUTHENTICATED })
  } else {
    store.dispatch({ type: UNAUTHENTICATED })
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
