<<<<<<< HEAD
import request from 'superagent'

export function fetchMessages(id) {
  return request.get('/api/v1/card/' + id).then((resp) => resp.body)
}
=======
import request from "superagent";

export function postMessage(newMessage) {
  return request
  .post('/api/v1/card/:id/add')
  .send(newMessage)
  .then(res => res.body)
  .catch(err => console.log('api error', err))
}
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f
