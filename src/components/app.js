import React, { Component } from 'react';

import Square from "./square"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      color: "#000000"
    }

    this.handleReset = this.handleReset.bind(this)
  }

  handleReset() {
    this.setState({
      color: "#000000"
    })
  }

  createSquares() {
    let squares = []
    for (let i=0; i<100; i++) {
      squares.push(<Square key={i} color={this.state.color}/>)
    }
    return squares
  }
  
  render() {
      return (
        <div className='app' onClick={this.handleReset}>
          <h3>Hover Over Center<br/>To Begin</h3>
          <div className="squares">
            {this.createSquares()}
          </div>
          <h3>Click Anywhere<br/>To Reset</h3>
        </div>
      )
  }
}
