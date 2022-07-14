
const connection = require('../connection')

function addMessage( newMessage, db = connection) {
  return db('messages').insert(newMessage)
}

module.exports = {
  addMessage
}