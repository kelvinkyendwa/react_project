import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Favorite Bands</h2>
        </div>

      </div>
    );
  }
}

export default App;

var first = <h1>Hey</h1>;

ReactDOM.render(
  first,
  document.getElementById('heading1')
);
