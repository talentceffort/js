import React, { Component } from 'react'
import Try from './Try'

const getNumbers = () => {

}

class NumberBaseball extends Component {

  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: ['사과', '배'],
  }

  onSubmitForm = () => {

  }

  onChangeInput = (c) => {
    this.input = c
  }

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />        
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Try v={v} i={i} /> 
            )
          })}
        </ul>
      </>
    )
  }
}

export default NumberBaseball