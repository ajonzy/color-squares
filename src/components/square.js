import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "#000000"
        }

        this.handleColorChange = this.handleColorChange.bind(this)
    }

    randomColorGenerator() {
        let color = ""
        for(let i = 0; i < 6; i++) {
          color += ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"][(Math.floor(Math.random() * 16))]
        }
        return `#${color}`
      }

    handleColorChange() {
        this.setState({
            color: this.randomColorGenerator()
        })
    }

    render() {
        return (
            <div className="square" onMouseOver={this.handleColorChange} style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}