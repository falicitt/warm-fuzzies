// ROUTES WE NEED
// path	method	data	response
// /api/v1/cards	GET	--	Array of message objects
// /api/v1/cards	POST	New message object	Object containing new id

const express = require('express')
const router = express.Router()
const db = require('../db/DB-Functions/cards')

module.exports = router

router.post('/', (req, res) => {
  const card = req.body
  db.insertCard(card)
    .then((idArr) => {
      const id = idArr[0]
      return db.getCardById(id)
    })
    .then((cardObj) => res.json(cardObj))
    .catch((err) => res.status(500).json({message: err.message}))
})


router.post('/:id/add', (req, res) => {
  const newMessage = req.body

  db.addMessage(newMessage)
  .then((idArr) => {
    newMessage.id = idArr[0]
    res.json(newMessage)
  })
  .catch(err => res.status(500).json({dberr: err.message}))
})

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
