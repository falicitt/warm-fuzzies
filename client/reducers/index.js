import { combineReducers } from 'redux'
import card from './card'
import newMessage from './newMessage'
import allMessagesReducer from './allMessages'
import loggedInUser from './loggedInUser'

export default combineReducers({
  loggedInUser,
  card,
  newMessage,
  messages: allMessagesReducer,
})
