const express = require('express')
const router = express.Router()
const db = require('../db/DB-Functions/cards')

module.exports = router

router.post('/:id/add', (req, res) => {
  const newMessage = req.body

  db.addMessage(newMessage)
  .then((idArr) => {
    newMessage.id = idArr[0]
    res.json(newMessage)
  })
  .catch(err => res.status(500).json({dberr: err.message}))
})