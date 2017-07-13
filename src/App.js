import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumPicker from './NumPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NumPicker options={['4', '8', '16', '32', '64']} value={1} onChange={function(){}}></NumPicker>
      </div>
    );
  }
}

export default App;
