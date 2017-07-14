import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumPicker from './NumPicker';

class App extends Component {
  constructor(){
    super();

    this.state = {
      value: null,
      players: [4, 8, 16, 32, 64]
    }

    this.handlePlayersChange = this.handlePlayersChange.bind(this);
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  }

  handlePlayersChange(players, value) {
    this.setState({
        players: players,
        value: value
    });
  }

  render() {
    const { value, players} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='container'>
          <div className='current-players-number' style={{color: '#2a9669', fontWeight: 'bold', marginTop: '10px'}}>How many players?</div>
          <NumPicker 
            options={ players }
            value={value} 
            onChange={this.handleChange}
            playersChange={this.handlePlayersChange}
          >
          </NumPicker>
          <div className='current-players-number'>
            Current players number: { this.state.value }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
