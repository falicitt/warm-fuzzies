import { SHOW_MESSAGES } from '../actions/messages'

// const tempInitState = { name: 'John', message: 'You are so lovely' }

const allMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MESSAGES:
      return action.payload
    default:
      return state
  }
}

export default allMessagesReducer
