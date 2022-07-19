const express = require('express')
const checkJwt = require('../auth0')
const router = express.Router()
const db = require('../db/DB-Functions/cards')
const checkJWT = require('../auth0')

module.exports = router

//create card
router.post('/', checkJwt, (req, res) => {
  // const card = req.body

  const auth0Id = req.user?.sub
  req.body.added_by_user = auth0Id

  db.insertCard(req.body)
    .then((idArr) => {
      const id = idArr[0]
      return db.getCardById(id)
    })
    .then((cardObj) => res.json(cardObj))
    .catch((err) => res.status(500).json({ message: err.message }))
})

//edit card title
router.patch('/:id', checkJWT, (req, res) => {
  const cardId = Number(req.params.id)
  const detailToUpdate = req.body.details
  const auth0Id = req.user?.sub

  console.log('detail to update', req.body.details)
  console.log('user', req.user?.sub)

  db.updateCard(cardId, detailToUpdate, auth0Id)
    .then(() => db.getCardById(cardId))
    .then((card) => res.json(card))
    .catch((err) => res.status(500).json({ msg: err.message }))
})


router.get('/card/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getCardById(id)
    .then((card) => res.json(card))
    .catch((err) => res.status(500).json({ msg: err.message }))
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


router.post('/:id/add', (req, res) => {
  const newMessage = req.body

  db.addMessage(newMessage)
    .then((idArr) => {
      const id = idArr[0]
      return db.getMessageById(id)  
    })
    .then((newMessage) => res.json(newMessage))
    .catch((err) => res.status(500).json({ dberr: err.message }))
})

router.patch('/message/:id', (req, res) => {
  const details = req.body
  const id = Number(req.params.id)

  db.editMessage(id, details)
    .then(() => {
      res.json(details)
    })
    .catch((err) => res.status(500).json({ dberr: err.message }))
})

router.delete('/message/:id', (req, res) => {
  const id = req.params.id
  console.log('route')
  db.deleteTheMessage(id)

    .then((id) => {
      res.json(id)
    })
    .catch((err) => {
      console.log('route err', err)
      res.status(500).json({ msg: err.message })
    })
})

