import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import rootReducer from '../reducers'

import Day               from './Day'
import Menu              from '../../base/components/Menu'
import Faults            from './Faults'
import LastDays          from './LastDays'
import TotalWeek         from './TotalWeek'
import BookStatus        from './BookStatus'
import MeanProgress      from './MeanProgress'
import FaultsWeekDay     from './FaultsWeekDay'
import SpeculateActual   from './SpeculateActual'
import LastYearTotalWeek from './LastYearTotalWeek'

const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log('store.subscribe()', store.getState()))

class Main extends Component {
  render() {
    return (
      <div>
        <Menu />

        <div className="container pb-5">
          <Provider store={store}>
            <Day />
          </Provider>

          <SpeculateActual />

          <div className="clearfix my-3"></div>
          <div className="row">
            <Faults />
            <FaultsWeekDay />
          </div>

          <div className="clearfix my-3"></div>
          <MeanProgress />

          <div className="clearfix my-3"></div>
          <div className="row">
            <LastDays />
            <BookStatus />
          </div>

          <div className="clearfix my-3"></div>
          <LastYearTotalWeek />

          <div className="clearfix my-3"></div>
          <TotalWeek />
        </div>
      </div>
    )
  }
}

export default Main