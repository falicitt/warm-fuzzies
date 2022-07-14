import { combineReducers } from 'redux'

import allMessagesReducer from './allMessages'

export default combineReducers({
  messages: allMessagesReducer,
})
