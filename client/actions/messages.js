import {
  fetchMessages,
  postMessage,
  deleteTheMessage,
} from '../apis/messages'

// type variables

export const SHOW_MESSAGES = 'SHOW_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_ONE_MESSAGE = 'DELETE_ONE_MESSAGE'

// action creators

export function addMessage(newMessage) {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  }
}

export function deleteOneMessage(message) {
  return {
    type: DELETE_ONE_MESSAGE,
    payload: message,
  }
}

// thunks

export function createMessage(newMessage) {
  
    return (dispatch => {
      dispatch(addMessage(newMessage))
      return postMessage(newMessage)
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
      })
    })
}



export function showMessages(messagesArray) {
  return {
    type: SHOW_MESSAGES,
    payload: messagesArray,
  }
}

// thunks

export function getMessages(id) {
  return (dispatch) => {
    // eslint-disable-next-line promise/catch-or-return
    fetchMessages(id) // from API
      // then dispatch, send redux what we got
      .then((messagesArray) => {
        dispatch(showMessages(messagesArray))
      })
  }
}

// delete API deleteTheMessage

export function deleteMessage(id) {
  return (dispatch) => {
    // API
    deleteTheMessage(id)
      .then((messageToBeDeleted) => {
        console.log('deleted...hopefully')
        dispatch(deleteOneMessage(messageToBeDeleted))
      })
      .then(() => {
        dispatch(getMessages())
      })
      .catch((err) => console.log(err))
  }
}

