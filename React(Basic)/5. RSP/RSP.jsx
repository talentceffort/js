import React, { Component } from 'react'

// 클래스의 경우 => constructor => render => ref => componentDidMount
// (setState / Props => shouldComponentUpdate(true) => render => componentDidUpdate)
// 부모가 자식을 제거할 때 => componentWillUnmount => 소멸

const rspCoords = {
  rock: '0',
  scissor: '-142px',
  paper: '-284px',
}

const scores = {
  rock: 1,
  scissor: 0,
  paper: -1,
}

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  componentDidMount() { // 컴포넌트가 첫 렌더링 된 후, 비동기 요청을 많이 함
    this.interval = setInterval(() => {
      const {imgCoord} = this.state;
      if (imgCoord === rspCoords.rock) {
        this.setState({
          imgCoord: rspCoords.scissor,
        });
      } else if (imgCoord === rspCoords.scissor) {
        this.setState({
          imgCoord: rspCoords.paper,
        });
      } else if (imgCoord === rspCoords.paper) {
        this.setState({
          imgCoord: rspCoords.rock,
        });
      }
    }, 1000)
  }

  componentDidUpdate() {} // 리렌더링 후

  componentWillUnmount() {
    //clearInterval(this.interval);
  } // 컴포넌트가 제거되기 직전. 비동기 요청 정리를 많이 함 ( 완료되지 않은 비동기 함수들 정리 필요함. )

  onClickBtn = (choice) => {

  }
  
  render() {
    const { result, score, imgCoord } = this.state
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}>
        </div>
        <div>
          <button id="rock" className="btn" onClick={() => this.onClickBtn('rock')}>rock</button>
          <button id="scissor" className="btn" onClick={() => this.onClickBtn('scissor')}>scissor</button>
          <button id="paper" className="btn" onClick={() => this.onClickBtn('paper')}>paper</button>
        </div>
      <div>{result}</div>
      <div>현재 점수 : {score}</div>
      </>
    )
  }
}

export default RSP