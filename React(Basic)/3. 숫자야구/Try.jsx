import React, { Component } from 'React'

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.v}</b> - {this.props.i}
      </li>
    )
  }
}

export default Try