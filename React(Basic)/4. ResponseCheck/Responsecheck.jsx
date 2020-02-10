import React, { Component } from 'react'

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: []
  }

  onClickScreen = () => {

  }

  averageDOM = () => {
    const { result } = this.state
    return <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
  }

  renderAverage = () => {
    const { result } = this.state

    if (result.length === 0) {
      return null
    } else {
      return this.averageDOM()
    }
  }

  render() {
    const { state, message } = this.state
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck