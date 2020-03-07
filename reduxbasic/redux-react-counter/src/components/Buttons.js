import React, { Component } from 'react'
import { increment, decrement } from '../actions'
import { connect } from 'react-redux'

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  }
}

Buttons = connect(null, mapDispatchToProps)(Buttons)
export default Buttons