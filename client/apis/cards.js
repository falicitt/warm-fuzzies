import request from 'superagent'

export function postCard(card, token) {
  return request
    .post('/api/v1/card')
    .set('authorization', `Bearer ${token}`)
    .send(card)
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message, 'error consuming api postCard'))
}

export function updateTheCard(cardId, details, token) {
  console.log('details', details)
  return request
    .patch('/api/v1/card/' + cardId)
    .set('authorization', `Bearer ${token}`)
    .send({ details })
    .then((res) => {
      console.log('res body', res.body)
    })
    .catch((err) =>
      console.log(err.message, 'error consuming api updateTheCard')
    )
}

export function getTheCard(cardId) {
  return request
    .get(`/api/v1/card/card/${cardId}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message, 'error consuming api getTheCard'))
}

export function getCardsByUser(userId) {
  return request
    .get(`/api/v1/card/user/${userId}`)
    .then((res) => {
      return res.body
    })
    .catch((err) =>
      console.log(err.message, 'error consuming api getCardsByUser')
    )
}
