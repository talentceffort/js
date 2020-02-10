import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'
import Responsecheck from './Responsecheck'

const Hot = hot(Responsecheck)

ReactDom.render( <Hot />, document.querySelector('#root') )