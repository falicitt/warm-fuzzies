import { combineReducers } from 'redux'
import cards from './cards'
import newMessage from './newMessage'

export default combineReducers({
  cards,
  newMessage,
})
