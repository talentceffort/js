import { INCREMENT, DECREMENT, setDiff, SET_DIFF } from "../actions"

const initialState = {
  value: 0,
  diff: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      })
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      })
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: parseInt(action.diff),
      })
    default:
      return state
  }
}

export default counterReducer