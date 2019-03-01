import React, { Component } from 'react';

import SquareLine from "./square-line"

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
  
  render() {
      return (
        <div className='app' onClick={this.handleReset}>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
          <SquareLine color={this.state.color}/>
        </div>
      )
  }
}
