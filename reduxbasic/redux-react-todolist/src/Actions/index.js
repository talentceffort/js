export const ADD_TODO_LIST = 'ADD_TODO_LIST'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const ALL_TODO_LIST = 'ALL_TODO_LIST'
export const COMPLETED_TODO_LIST = 'COMPLETED_TODO_LIST'
export const ACTIVE_TODO_LIST = 'ACTIVE_TODO_LIST'

export function addTodo(data) {
  return {
    type: ADD_TODO_LIST,
    data: data,
  }
}

export function completeTodo(key) {
  return {
    type: COMPLETE_TODO,
    key: key,
  }
}

export function deleteTodo(key) {
  return {
    type: DELETE_TODO,
    key: key,
  }
}

export function allTodoList() {
  return {
    type: ALL_TODO_LIST
  }
}

export function completedTodoList() {
  return {
    type: COMPLETED_TODO_LIST
  }
}

export function activeTodoList() {
  return {
    type: ACTIVE_TODO_LIST
  }
}
