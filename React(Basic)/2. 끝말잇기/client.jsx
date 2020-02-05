const React = requier('react')
const ReactDom = requier('react-dom')

const WordRelay = requier('./WordRelay')

ReactDom.render( <WordRelay />, document.querySelector('#root') )