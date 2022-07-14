import { combineReducers } from 'redux'
import cards from './cards'
import newMessage from './newMessage'
import allMessagesReducer from './allMessages'

export default combineReducers({
  cards,
  newMessage,
  messages: allMessagesReducer,
})
