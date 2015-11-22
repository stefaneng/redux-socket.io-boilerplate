import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.js'
import io from 'socket.io-client'
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { setState, SET_STATE } from '../redux/actions'
import remoteActionMiddleware from './remote_action_middleware'

const socket = io(`${location.protocol}//${location.hostname}:8090/todolist`)
socket.on('state', state => {
  store.dispatch(setState(state))
})

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)
