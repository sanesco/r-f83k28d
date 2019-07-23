import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
     }
}


  render() {
    console.log(this.state.count);
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.addValue.bind(this)}>Incrementa</button>
      </div>
    );
  }

    addValue(){
        this.setState({
            count: this.state.count + 1
        });
    }
}

export default App;
