import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'

import RSP from './RSP'
import RSPHook from './RSPhook'

//const Hot = hot(RSP)
const Hot = hot(RSPHook)

ReactDom.render( <Hot />, document.querySelector('#root') )