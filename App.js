import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './src/reducers'
import Screen from './src/screen'

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={ store }>
    <Screen />
  </Provider>
)

export default App
