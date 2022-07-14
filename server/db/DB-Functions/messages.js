// NEED DB CONNECTION
// easier to leave stuff in connection.js and import it in here or any other db files you need.
const connection = require('../connection')

function getAllMessages(db = connection) {
  return db('message').select()
}

module.exports = {
  getAllMessages,
}
