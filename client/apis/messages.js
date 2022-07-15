import request from 'superagent'

export function fetchMessages(id) {
  return request.get('/api/v1/card/' + id).then((resp) => resp.body)
}


export function postMessage(newMessage) {
  return request
  .post('/api/v1/card/:id/add')
  .send(newMessage)
  .then(res => res.body)
  .catch(err => console.log('api error', err))
}
export function deleteTheMessage(id) {
  console.log('delete api called')
  return request.delete(`/api/v1/card/message/${id}`)
  .then((resp) => {
    console.log('delete api end', resp)
    return resp
  })
}
