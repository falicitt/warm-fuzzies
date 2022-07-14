// NEED DB CONNECTION
// easier to leave stuff in connection.js and import it in here or any other db files you need.
const connection = require('../connection')

function getAllMessages(id, db = connection) {
  return db('messages').where('card_id', id).select()
}

module.exports = {
  getAllMessages,
}
