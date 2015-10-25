import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:8090/entries`);
socket.on('state', state => {
  console.log('state', state);
});

ReactDOM.render(<App />, document.getElementById('root'));
