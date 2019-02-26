import React, { Component } from 'react';

import SquareLine from "./square-line"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <div className='app'>
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
        <SquareLine />
      </div>
    );
  }
}
