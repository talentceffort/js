import React, { useState, useRef } from 'react'

const ResponseCheckHook = () => {

  const [state, setState] = useState('waiting')
  const [message, setMessage] = useState('클릭해서 시작하세요')
  const [result, setResult] = useState([])
  const timeout = useRef(null)
  const startTime = useRef()
  const endTime = useRef()

  //값이 변경되어도 다시 render 할 필요가 없을 경우 useRef 사용.
  // usestate 는 값이 변하면 render 가 다시 실행.
  // 화면은 바뀌길 원하진 않지만 값은 변해야 할 경우. useRef 사용.

  const onClickScreen = () => {
    
    if (state === 'waiting') {
      
      timeout.current = setTimeout(() => {
        setState('now')
        setMessage('지금 클릭')
        startTime.current = new Date()
      }, Math.floor(Math.random() * 1000) + 2000)

      setState('ready')
      setMessage('초록색이 되면 클릭하세요')
    
    } else if (state === 'ready') {
    
      clearTimeout(timeout.current)
      setState('waiting')
      setMessage('너무 빠릅니다.')
    
    } else if (state === 'now') {
    
        endTime.current = new Date()
        setState('waiting')
        setMessage('클릭해서 시작하세요')
        setResult((prevResult) => {
          return  [...prevResult, endTime.current - startTime.current]
        })  
    } 
  }
  
  const onReset = () => {
    setResult([])
  }

  const averageDOM = () => {
    console.log(Array.isArray(result))
    return (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>Reset</button>
      </>
    ) 
  }

  const renderAverage = () => {
    return result.length === 0
      ? null
      : averageDOM()

    // if (result.length === 0) {
    //   return null
    // } else {
    //   return this.averageDOM()
    // }
  }
  return (
    <>
      <div
      id="screen"
      className={state}
      onClick={onClickScreen}
      >
      {message}
      </div>
      {renderAverage()}
    </>
  )
}

export default ResponseCheckHook