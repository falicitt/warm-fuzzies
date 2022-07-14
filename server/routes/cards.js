

const express = require('express')
const router = express.Router()
const db = require('../db/DB-Functions/cards')

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



module.exports = router