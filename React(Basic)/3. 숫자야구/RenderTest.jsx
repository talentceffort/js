import React, { PureComponent } from 'react'

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: []
  }


  // shouldComponentUpdate(nextProps, nextState, nextcontext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true
  //   }
  //   return false
  // }

  onClick = () => {
    // const array = this.state.array
    // array.push(1)
    // // setState 호출 시 rerender.
    // this.setState({array})
    console.log([...this.state.array, 1])
    this.setState({
      array: [...this.state.array, 1]
    })
  }

  render() {
    console.log('렌더링', this.state)
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test