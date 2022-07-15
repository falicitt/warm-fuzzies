import { combineReducers } from 'redux'
<<<<<<< HEAD
<<<<<<< HEAD

import allMessagesReducer from './allMessages'

export default combineReducers({
  messages: allMessagesReducer,
=======
import cards from './cards'
=======
import card from './card'
>>>>>>> d258150af6245420edc22667f6a48f52f2467341
import newMessage from './newMessage'
import allMessagesReducer from './allMessages'

export default combineReducers({
  card,
  newMessage,
<<<<<<< HEAD
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
=======
  messages: allMessagesReducer,
>>>>>>> d258150af6245420edc22667f6a48f52f2467341
})
