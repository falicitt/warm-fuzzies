import { SHOW_MESSAGES, DELETE_ONE_MESSAGE } from '../actions/messages'

// const tempInitState = { name: 'John', message: 'You are so lovely' }

const allMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MESSAGES:
      return action.payload
    case DELETE_ONE_MESSAGE:
        return state.filter(message => message.id !== action.payload.id)
    default:
      return state
  }
}

export default allMessagesReducer
