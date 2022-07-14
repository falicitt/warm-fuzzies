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
