import { createStore } from 'redux'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let initialState = {
  value: 0,
}

// action type
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// action
const increment = (diff) => {
  return {
    type: INCREMENT,
    addBy: diff,
  }
}

// counter reducer
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: 
      return Object.assign({}, state, {
        value: state.value + action.addBy,
      })
    default:
      return state
  }
}

// store
const store = createStore(counterReducer)

// counter app
class Counter extends Component {
  constructor(props) {
    super(props)
    this.onIncreament = this.onIncreament.bind(this)
  }

  onIncreament() {
    this.props.store.dispatch(increment(1))
  }

  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
    }
    return (
      <h1 style={style} onClick={this.onIncreament}>
        {this.props.store.getState().value}
      </h1>
    )
  }
}

const render = () => ReactDOM.render(<Counter store={store} />, document.getElementById('root'))
store.subscribe(render)
render()