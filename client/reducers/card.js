import { CREATE_CARD } from '../actions/cards'

const card = (state = null, action) => {
  const { type, payload } = action
  // console.log('create card payload', payload)
  switch (type) {
    case CREATE_CARD:
      return payload
    default:
      return state
  }
}

export default card
