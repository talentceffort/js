const React = require('react')
const { useState, useRef } = React

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9))
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9))
    const [result, setResult] = React.useState('')
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef(null)

    const onChangeInput = (e) => {
        setValue(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
                setFirst(Math.ceil(Math.random() * 9)),
                setSecond(Math.ceil(Math.random() * 9)),
                setValue(''),
                setResult(`${first}` + ' * ' +  `${second}` + ' = ' + `${value}` + ' 정답'),
                inputRef.current.focus()
        } else {
            setValue('')
            setResult('땡')
            inputRef.current.focus()
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second} 는? </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button> 입력! </button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}

module.exports = GuGuDan