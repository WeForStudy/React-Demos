import React, { Component } from 'react';
import './index.styl';
import { getQuestion } from '../../services'
class App extends Component {
  componentDidMount() {
    getQuestion().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
