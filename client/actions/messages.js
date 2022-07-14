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



