import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My First React App - Counter</h2>
        </div>
        <div>
          <Counter initialNumber={1} />
        </div>
      </div>
    );
  }
}

export default App;
