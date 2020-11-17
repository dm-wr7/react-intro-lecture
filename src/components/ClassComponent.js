import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <div>
        I am a class based component
        <h2>The count is: {this.state.counter}</h2>
        <button onClick={() => this.incrementCounter()}>CLICK ME!</button>
      </div>
    )
  }
}

export default ClassComponent
