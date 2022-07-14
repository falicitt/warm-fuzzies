const conn = require('../connection')

function insertCard(newCard, db = conn) {
  return db('cards').insert(newCard)
}

function getCardById(id, db = conn) {
  return db('cards').where('id', id).first().select()
}

module.exports = {
  insertCard,
  getCardById
}