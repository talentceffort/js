import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'
//import Responsecheck from './Responsecheck'

import responseCheckHook from './responseCheckHook'

const Hot = hot(responseCheckHook)

ReactDom.render( <Hot />, document.querySelector('#root') )