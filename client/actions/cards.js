import { postCard } from '../apis/cards'

export const CREATE_CARD = 'CREATE_CARD'

// Action creators
export function createCard(newCard) {
  return {
    type: 'CREATE_CARD',
    payload: newCard,
  }
}

// Thunks
export function addCard(newCard, token) {
  return (dispatch) => {
    postCard(newCard, token)
      .then((cardDetails) => {
        dispatch(createCard(cardDetails))
      })
      .catch((err) => console.log(err.message))
  }
}
