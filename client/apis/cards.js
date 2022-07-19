import request from 'superagent'

export function postCard(card) {
  return request
    .post('/api/v1/card')
    .send(card)
    .then((res) => res.body)
    .catch((err) => console.log(err, 'error consuming api postCard'))
}

// export function getCard(id) {
//   return request.get(`/api/v1/card/${id}`)
//   .then(res => res.body)
// }


// export function editCard (editedCard) {
//   return request.patch(`/api/v1/card/${editedCard.id}`)
//   .send(editedCard)
//   .then(res => {return res.body})
//   .catch(err => console.log('api error', err))
// }

export function updateTheCard(id, details) {
  return request
    .patch('/api/v1/card/' + id)
    .send(details)
    .then((res) => {
      // console.log('updateTheCard:', res.body)
      res.body
    })
    .catch((err) => console.log(err, 'error consuming api updateTheCard'))
}

export function getTheCard(cardId) {
  return request
    .get(`/api/v1/card/card/${cardId}`)
    .then((res) => {
      // console.log('getTheCard:', res.body)
      return res.body
    })
    .catch((err) => console.log(err, 'error consuming api getTheCard'))
}


