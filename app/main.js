import React from 'react';
import ReactDOM from 'react-dom'
import App from './containers/App.js'
import io from 'socket.io-client'
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {SET_STATE} from '../redux/actions'

const store = createStore(reducer)

const socket = io(`${location.protocol}//${location.hostname}:8090/entries`)
socket.on('state', state => {
  store.dispatch({type: SET_STATE, state})
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
