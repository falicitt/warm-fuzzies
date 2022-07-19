const connection = require('../connection')

function insertCard(newCard, db = connection) {
  return db('cards').insert(newCard)
}

function updateCard(id, details, user, db = connection) {
  return db('cards')
  .where('id', id)
  .then((card) => 
  { console.log('card', card[0])
    authorizeUpdate(card[0], user)})
  .then(() => {
    return db('cards').where('id', id).update(details)
  })
}

function authorizeUpdate(card, auth0Id) {
  // console.log(card)
  console.log('db1', card.added_by_user)
  console.log('db2', auth0Id)
  if (card.added_by_user !== auth0Id) {
    throw new Error('Unauthorized')
  }
}

function addMessage(newMessage, db = connection) {
  return db('messages').insert(newMessage)
}

function getCardById(id, db = connection) {
  return db('cards').where('id', id).first().select()
}

function getMessageById(id, db = connection) {
  return db('messages').where('id', id).first().select()
}

function getAllMessages(id, db = connection) {
  return db('messages').where('card_id', id).select()
}

function editMessage(id, details, db = connection) {
  return db('messages').update(details).where('id', id)
}

function deleteTheMessage(id, db = connection) {
  return db('messages').where('id', id).delete()
}



module.exports = {
  addMessage,
  insertCard,
  getAllMessages,
  getMessageById,
  getCardById,
  deleteTheMessage,
  // editCard,
  updateCard,
  editMessage,
  deleteTheMessage,
}
