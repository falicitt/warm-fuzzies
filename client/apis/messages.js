import request from 'superagent'

export function getAllMessages() {
  return request.get('/api/v1/messages').then((resp) => resp.body)
}


