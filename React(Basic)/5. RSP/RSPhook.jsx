import React, { useState, useEffect, useRef } from 'react'


const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const RSPhook = () => {

    const [result, setResult] = useState('');    
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => { // componentDidMount, componentDidUpdate 의 역할.
        interval.current = setInterval(changeHand, 100);
        console.log('다시 실행')
        return () => {
            console.log('종료')
            clearInterval(interval.current);
        } // componentWillUnmount 역할.
    }, [imgCoord]) // 배열에 넣은 값들이 바뀔 때 useEffect 가 실행 됨. 배열에 인자가 없으면 맨 처음에 한 번만 실행하고 다시는 실행되지 않음.

    const changeHand = () => { // useEffect 에 [] 값이 비어 있으면 제대로 작동 안됨.
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    }

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        
        if (diff === 0) {
            setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    }

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
                </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSPhook;