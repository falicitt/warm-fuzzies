import { combineReducers } from 'redux'
<<<<<<< HEAD

import allMessagesReducer from './allMessages'

export default combineReducers({
  messages: allMessagesReducer,
=======
import cards from './cards'
import newMessage from './newMessage'

export default combineReducers({
  cards,
  newMessage,
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
})
