import request from "superagent";

export function postMessage(newMessage) {
  return request
  .post('/api/v1/cards/:id/add')
  .send(newMessage)
  .then(res => res.body)
  .catch(err => console.log('api error', err))
}