import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        VALUE: {this.props.value}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

Counter = connect(mapStateToProps)(Counter)

export default Counter
