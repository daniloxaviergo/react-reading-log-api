import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

import Menu from '../../base/components/Menu'
import List from './List'

const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log('store.subscribe()', store.getState()))

class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Provider store={store}>
          <List />
        </Provider>
      </div>
    )
  }
}

export default Main