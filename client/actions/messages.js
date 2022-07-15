import { postMessage, fetchMessages } from "../apis/messages";

// type variables

export const SHOW_MESSAGES = 'SHOW_MESSAGES'

export const ADD_MESSAGE = 'ADD_MESSAGE'

// action creators

export function showMessages(messagesArray) {
  return {
    type: SHOW_MESSAGES,
    payload: messagesArray,
  }
}

export function addMessage(newMessage) {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
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


