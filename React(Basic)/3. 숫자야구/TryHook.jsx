import React, { memo } from 'react'

const Try = memo(({ tryInfo }) => {
  //props 를 변경하고 싶다면? 아래와 같은 소스 작성하자.
  // const [result, setResult] = useState(typeInfo.result)

  // const onClick = () => {
  //   setResult('1')
  // }

  return (
    <li>
      {/* <div onClick={onClick}>{result}</div> */}
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
})

export default Try