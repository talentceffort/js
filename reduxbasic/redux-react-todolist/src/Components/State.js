import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allTodoList, completedTodoList, activeTodoList } from '../Actions'


class State extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.allTodoList}>All</button>
        <button onClick={this.props.completedTodoList}>Completed</button>
        <button onClick={this.props.activeTodoList}>Active</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allTodoList: () => dispatch(allTodoList()),
    completedTodoList: () => dispatch(completedTodoList()),
    activeTodoList: () => dispatch(activeTodoList()),
  }
}

State = connect(null, mapDispatchToProps)(State)

export default State
