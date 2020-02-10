import React, { Component, createRef } from 'react'
import Try from './Try'

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
  return array
} 

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  }

  onSubmitForm = (e) => {
    const { value, answer, tries } = this.state
    e.preventDefault()
    if (value === answer.join('')) {
      this.setState((prevState) => {
        return { 
          result: '홈런',
          tries: [...prevState.tries, { try: value, result: '홈런!'}],
        }
      })
      this.setState({
        value: '', 
        answer: getNumbers(),
        tries: []
      })
      this.inputRef.current.focus()
    } else {
      const answerArray = value.split('').map((v) => parseInt(v))
      let strike = 0
      let ball = 0
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join('')}`,
        })
        alert('게임을 다시 시작합니다')
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: []
        })
        this.inputRef.current.focus() 
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1
          } else if (answer.includes(answerArray[i])) {
            ball += 1
          }
        }
        this.setState((prevState) => {
          return { 
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }],
            value: ''
          }
        })
          
      }
    }
  }

  onChangeInput = (e) => {
    console.log(this.state.answer)
    console.log(this.state)
    this.setState({
      value: e.target.value
    })
  }

  inputRef = createRef()

  onInputRef = (c) => {
    console.log();
    this.inputRef = c
  }

  render() {
    const { result, tries, value } = this.state
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />        
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} /> 
            )
          })}
        </ul>
      </>
    )
  }
}

export default NumberBaseball