import { 
  ADD_TODO_LIST, 
  COMPLETE_TODO,
  DELETE_TODO,
  ALL_TODO_LIST,
  COMPLETED_TODO_LIST,
  ACTIVE_TODO_LIST
} 
from "../Actions"

const initialState = {
  todoList: [{
    todo: 'aa',
    key: 1,
    isCompleted: true,
  }, {
    todo: 'bb',
    key: 2,
    isCompleted: false,
  }, {
    todo: 'cc',
    key: 3,
    isCompleted: false,
  }, {
    todo: 'dd',
    key: 4,
    isCompleted: false,
  }],
  type: 'all'
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        todoList: [action.data, ...state.todoList]
      }
    case COMPLETE_TODO:
      const index = state.todoList.findIndex((v) => v.key === action.key)
      const todoList = [...state.todoList]
      const todo = todoList[index]
      todo.isCompleted = true
      
      return {
        ...state,
        todoList
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((v) => v.key !== action.key),
      }
    case ALL_TODO_LIST:
      return {
        ...state,
        type: 'all'
      }
    case COMPLETED_TODO_LIST:
      return {
        ...state,
        type: 'completed'
      }
    case ACTIVE_TODO_LIST:
      return {
        ...state,
        type: 'active'
      }
    default:
      return state
  }
}

export default todoReducer