import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import counterReducer from './reducers';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger'

const store = createStore(counterReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
