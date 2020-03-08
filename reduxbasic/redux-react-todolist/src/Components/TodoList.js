import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from '../Actions/index'

class TodoList extends Component {
  render() {
    const todo = this.props.todoList

    let viewTodo = []
    
    switch (this.props.type) {
      case 'all':
          viewTodo = [...todo]
        break
      case 'completed':
          viewTodo = todo.filter((v) => v.isCompleted === true)
        break
      case 'active':
        viewTodo = todo.filter((v) => v.isCompleted === false)
        break
    }

    return (
      <div>
        <h1>type: {this.props.type}</h1>
        {viewTodo.map((todo) => {
          return (
            <div key={todo.key}>
              {todo.isCompleted ?
              <div>완료됨</div>
              : null }
              <h3>{todo.todo}</h3>
              <button onClick={() => this.props.completeTodo(todo.key)}>완료</button>
              <button onClick={() => this.props.deleteTodo(todo.key)}>삭제</button>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
    type: state.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: key => dispatch(deleteTodo(key)),
    completeTodo: key => dispatch(completeTodo(key))
  }
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoList