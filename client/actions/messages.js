<<<<<<< HEAD
import {
  fetchMessages,
} from '../apis/messages'

// type variables

export const SHOW_MESSAGES = 'SHOW_MESSAGES'

// action creators

export function showMessages(messagesArray) {
  return {
    type: SHOW_MESSAGES,
    payload: messagesArray,
  }
}

// thunks

export function getMessages(id) {
  return (dispatch) => {
    console.log('THUNK')
    console.log(id)
    // eslint-disable-next-line promise/catch-or-return
    fetchMessages(id) // from API
      // then dispatch, send redux what we got
      .then((messagesArray) => {
        console.log('thunk then', messagesArray)
        dispatch(showMessages(messagesArray))
      })
  }
}



=======
import { postMessage } from "../apis/messages";

export const ADD_MESSAGE = 'ADD_MESSAGE'

export function addMessage(newMessage) {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  }
}

export function createMessage(newMessage) {
  
    return (dispatch => {
      dispatch(addMessage(newMessage))
      return postMessage(newMessage)
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        return dispatch(showError(errMessage))
      })
    })
}
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
