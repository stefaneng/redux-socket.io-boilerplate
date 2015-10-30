import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.app}>
          redux-socket.io-boilerplate
      </div>
    );
  }
}
