import React, { useState, useRef } from 'react'
import Try from './TryHook'

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
  return array
} 

const NumberBaseballHook = () => {
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')
  const [answer, setanswer] = useState(getNumbers())
  const [tries, setTries] = useState([])
  const inputEl = useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (value === answer.join('')) {
      setResult('홈런')
      setTries((prevTries) => {
        return  [...prevTries, { try: value, result: '홈런!'}]
      })
      alert('게임을 다시 시작합니다')
      setValue('')
      setanswer(getNumbers())
      setTries([])
      inputEl.current.focus()
    } else {
      const answerArray = value.split('').map((v) => parseInt(v))
      let strike = 0
      let ball = 0
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')}`)
        alert('게임을 다시 시작합니다')
        setValue('')
        setanswer(getNumbers())
        setTries([])
        inputEl.current.focus()
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1
          } else if (answer.includes(answerArray[i])) {
            ball += 1
          }
        }
        setTries((prevTries) => {
          return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]
        })
        setValue('')
      }
    }
  }

  const onChangeInput = (e) => {
    console.log(answer)
    //console.log(this.state)
    setValue(e.target.value)
  }  

  return (
    <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input maxLength={4} value={value} onChange={onChangeInput} />        
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

export default NumberBaseballHook