import request from 'superagent'

export function postCard(card) {
  return request
    .post('/api/v1/card')
    .send(card)
    .then((res) => res.body)
    .catch((err) => console.log(err, 'error consuming api postCard'))
}

export function updateTheCard(id, details) {
  return request
    .patch('/api/v1/card/' + id)
    .send(details)
    .then((res) => res.body)
    .catch((err) => console.log(err, 'error consuming api updateTheCard'))
}

// export function fetchOneCard(id) {}
