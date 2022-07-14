import { postCard } from '../apis/cards'


// Action creators
export function createCard(newCard) {
  return {
    type: 'CREATE_CARD',
    paylod: newCard
  }
}


// Thunks
export function addCard(newCard) {
  return (dispatch) =>{
    postCard(newCard)
      .then((cardDetails) => dispatch(createCard(cardDetails)))
      .catch((err) => console.log(err.message))
  }
}
