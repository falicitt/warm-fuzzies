import request from 'superagent'

export function fetchMessages(id) {
  return request.get('/api/v1/card/' + id).then((resp) => resp.body)
}
