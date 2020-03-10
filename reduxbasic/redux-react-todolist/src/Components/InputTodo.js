import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'

class InputTodo extends Component {
  state = {
    inputValue: ''
  }

  onChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onClickResetInput = () => {
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onChangeInput} placeholder="add todo here"></input>
        <button onClick={() => this.props.onAddTodo(this.state.inputValue)}>Add</button>
        <button onClick={this.onClickResetInput}>Cancle</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: data => {
      return dispatch(addTodo({
        key: Date.now(),
        isCompleted: false,
        todo: data,
      }))
    },
  }
}

InputTodo = connect(null, mapDispatchToProps)(InputTodo)

export default InputTodo