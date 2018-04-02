import { combineReducers } from 'redux'

import { DAY } from '../actions'

function day(state = {}, action) {
  switch(action.type) {
    case DAY:
      return action.data.stats
    default:
      return state
  }
}

const rootReducer = combineReducers({
  day
})

export default rootReducer