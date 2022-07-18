import { fetchMessages, postMessage, deleteTheMessage } from '../apis/messages'

// type variables
export const SHOW_MESSAGES = 'SHOW_MESSAGES'
export const DELETE_ONE_MESSAGE = 'DELETE_ONE_MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'

// action creators
// add one message
export function addMessage(newMessage) {
  return {
    type: ADD_MESSAGE,
    payload: newMessage,
  }
}

export function createMessage(newMessage) {
    return (dispatch => {
      postMessage(newMessage)
      .then((messageDetails) => {
        dispatch(addMessage(messageDetails))  
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
      })
})
}

//get all messages
export function deleteOneMessage (id) {
  return {
    type:DELETE_ONE_MESSAGE,
    payload: id
  }
}

export function showMessages(messagesArray) {
  return {
    type: SHOW_MESSAGES,
    payload: messagesArray,
  }
}

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

export function deleteMessage(messageId, cardId) {
  return (dispatch) => {
    deleteTheMessage(messageId)
      .then(() => {
        console.log('deleted..')
        dispatch(deleteOneMessage(messageId))
      })
      .then(() => {
        dispatch(getMessages(cardId))
      })
      .catch((err) => console.log(err))
  }
}
