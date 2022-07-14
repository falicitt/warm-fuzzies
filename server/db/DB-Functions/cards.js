
const connection = require('../connection')

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
  getCardById
}