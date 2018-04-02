import { combineReducers } from 'redux'

import { INDEX, LOG_INDEX } from '../actions'

// function emptyHash() {
//   return {}
// }

// function emptyArray() {
//   return []
// }

function projects(state = [], action) {
  // console.log('action', action)
  switch(action.type) {
    case INDEX:
      return action.projects.data
    default:
      return state
  }
}

function logs(state = [], action) {
  switch(action.type) {
    case LOG_INDEX:
      let resp = [...state, action.data]
      return resp
    default:
      return state
  }
}

const rootReducer = combineReducers({
  projects,
  logs
})

export default rootReducer