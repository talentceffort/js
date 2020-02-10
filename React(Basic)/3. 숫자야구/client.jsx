const React = require('react')
const ReactDom = require('react-dom')
const { hot } = require('react-hot-loader/root')

import NumberBaseball from './NumberBaseball'
//import NumberBaseball from './NumberBaseballHook'
// import NumberBaseball from './RenderTest'

const Hot = hot(NumberBaseball)

ReactDom.render( <Hot />, document.querySelector('#root') )
