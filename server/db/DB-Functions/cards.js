// NEED DB CONNECTION
// easier to leave stuff in connection.js and import it in here or any other db files you need.
const connection = require('../connection')

function getAllMessages(id, db = connection) {
  return db('messages').where('card_id', id).select()
}

function addMessage( newMessage, db = connection) {
  return db('messages').insert(newMessage)
}


function insertCard(newCard, db = connection) {
  return db('cards').insert(newCard)
}

function getCardById(id, db = connection) {
  return db('cards').where('id', id).first().select()
}

module.exports = {
  addMessage,
  insertCard,
  getCardById,
  getAllMessages
}
