import React, { Component } from 'React'

class Try extends Component {
   //부모로부터 받은 data 를 변경하고 싶다면..?
  // state = {
  //   result: this.props.result,
  //   try: this.props.try
  // }
  
  render() {
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    )
  }
}

export default Try