const connection = require('../connection')

function addMessage(newMessage, db = connection) {
  return db('messages').insert(newMessage)
}

function insertCard(newCard, db = connection) {
  return db('cards').insert(newCard)
}

function updateCard(id, details, db = connection) {
  return db('cards').where('id', id).update(details)
}

function getCardById(id, db = connection) {
  return db('cards').where('id', id).first().select()
}

function getAllMessages(id, db = connection) {
  return db('messages').where('card_id', id).select()
}

function editMessage(id, details, db = connection) {
  return db('messages').update(details).where('id', id)
}

function editCard(id, details, db = connection) {
  return db ('cards')
  .update(details)
  .where('id', id)
}

function deleteTheMessage(id, db = connection) {
  return db('messages').where('id', id).delete()
}

module.exports = {
  addMessage,
  insertCard,
  getAllMessages,
  getCardById,
  deleteTheMessage,
  editCard,
  updateCard,
  editMessage,
  deleteTheMessage,
}
