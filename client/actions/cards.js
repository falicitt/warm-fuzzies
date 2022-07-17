import { postCard } from '../apis/cards'

// Action creators
export function createCard(newCard) {
  return {
    type: 'CREATE_CARD',
    payload: newCard,
  }
}

// export function cardContent(id) {
//   return {
//     type: 'SHOW_CARD',
//     payload: id,
//   }
// }

// Thunks
export function addCard(newCard) {
  return (dispatch) => {
    postCard(newCard)
      .then((cardDetails) => {
        dispatch(createCard(cardDetails))
        // return cardDetails.id
      })
      .catch((err) => console.log(err.message))
  }
}

// export function getCard(id) {
//   return (dispatch) => {
//     getTheCard(id)
//       .then((id) => {
//         dispatch(cardContent(id))
//         console.log('card content')
//       })
//       .catch((err) => console.log(err.message))
//   }
// }
