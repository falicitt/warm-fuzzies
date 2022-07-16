import { combineReducers } from 'redux'
import card from './card'
import newMessage from './newMessage'

import allMessagesReducer from './allMessages'

export default combineReducers({
  card,
  newMessage,
  messages: allMessagesReducer,
})
