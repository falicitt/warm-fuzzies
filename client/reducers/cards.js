const cards = (state = [], action) => {

  switch (action.type) {
    case 'CREATE_CARD':
      return action.payload
    default:
      return state
  }
}

export default cards