import request from 'superagent'

export function fetchMessages(cardId) {
  console.log('api:', cardId)
  return request.get('/api/v1/card/' + cardId).then((resp) => resp.body)
}

export function postMessage(newMessage) {
  return request
    .post('/api/v1/card/:id/add')
    .send(newMessage)
    .then((res) => {
      return res.body})
    .catch((err) => console.log('api error', err))
}

export function postImage(imgObj) {
  return request
    .post('/upload')
    .send(imgObj)
    .then((res) => res.body)
    .catch((err) => console.log('image upload failed', err))
}

export function editMessage(id, newMessage) {
  return request
    .patch(`/api/v1/card/message/${id}`)
    .send(newMessage)
    .then((res) => res.body)
}

export function deleteTheMessage(id) {
  console.log('delete api called')
  return request.delete(`/api/v1/card/message/${id}`).then((resp) => {
    console.log('delete api end', resp)
    return resp
  })
}
