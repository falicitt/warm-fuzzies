import request from 'superagent'

export function postCard(card, token) {
  return request
    .post('/api/v1/card')
    .set('authorization', `Bearer ${token}`)
    .send(card)
    .then((res) => res.body)
    .catch((err) => console.log(err, 'error consuming api postCard'))
}

export function updateTheCard(id, details, token) {
  console.log('details', details)
  return request
    .patch('/api/v1/card/' + id)
    .set('authorization', `Bearer ${token}`)
    .send( {details} )
    .then((res) => {
      console.log('res body', res.body)
    })
    .catch((err) => console.log(err.message, 'error consuming api updateTheCard'))
}

export function getTheCard(id) {
  return request
    .get(`/api/v1/card/card/${id}`)
    .then((res) => {
      // console.log('getTheCard:', res.body)
      return res.body
    })
    .catch((err) => console.log(err, 'error consuming api getTheCard'))
}


