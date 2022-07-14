import {
  getAllMessages,
} from '../apis/messages'

// type variables

export const SHOW_MESSAGES = 'SHOW_MESSAGES'

// action creators

function showMessages(arr) {
  return {
    type: SHOW_MESSAGES,
    payload: arr,
  }
}

// thunks

export function getMessages() {
  return (dispatch) => {
    // console.log('THUNK')
    // eslint-disable-next-line promise/catch-or-return
    getAllMessages() // from API
      // then dispatch, send redux what we got
      .then((messagesArray) => {
        // console.log('thunk then', moviesArr)
        dispatch(showMessages(messagesArray))
      })
  }
}



