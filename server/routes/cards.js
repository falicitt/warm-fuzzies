// ROUTES WE NEED
// path	method	data	response
// /api/v1/cards	GET	--	Array of message objects
// /api/v1/cards	POST	New message object	Object containing new id

const express = require('express')
const router = express.Router()
const db = require('../db/DB-Functions/cards')

router.get('/:id', (req, res) => {
  // use database function getAllMessages
  const id = Number(req.params.id)
  db.getAllMessages(id)
    .then((theMessages) => {
      // then will be passed the result of the function getAllMessages
      // console.log(theMessages)
      res.json(theMessages)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router
