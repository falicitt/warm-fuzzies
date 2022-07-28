const initialMessage = null

const newMessage = (state = initialMessage, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return action.payload
    }

    default:
      return state
  }
}

export default newMessage
