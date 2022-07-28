const card = (state = null, action) => {
  const { type, payload } = action
  console.log('create card payload', payload)
  switch (type) {
    case 'CREATE_CARD':
      return payload
    // case 'SHOW_CARD':
    //   return action.payload
    default:
      return state
  }
}

export default card
