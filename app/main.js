import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import io from 'socket.io-client';
import reducer from './reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090/entries`);
socket.on('state', state => {
  store.dispatch({type: 'SET_STATE', state});
});

ReactDOM.render(<App />, document.getElementById('root'));
