const cards = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE_CARD':
      return [...state, payload]
    default:
      return state
  }
}

export default cards