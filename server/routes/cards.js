const express = require('express')
const checkJwt = require('../auth0')
const router = express.Router()
const db = require('../db/DB-Functions/cards')
const checkJWT = require('../auth0')

module.exports = router

//create card
router.post('/', checkJwt, (req, res) => {
  const auth0Id = req.user?.sub
  req.body.added_by_user = auth0Id

  db.insertCard(req.body)
    .then((idArr) => {
      const id = Number(idArr[0])
      return db.getCardById(id)
    })
    .then((cardObj) => res.json(cardObj))
    .catch((err) =>
      // res.status(500).json({ message: err.message })
      console.log('db error', err.message)
    )
})

//edit card (to mark complete?)
router.patch('/:id', checkJWT, (req, res) => {
  const cardId = Number(req.params.id)
  const detailToUpdate = req.body.details
  const auth0Id = req.user?.sub

  db.updateCard(cardId, detailToUpdate, auth0Id)
    .then(() => db.getCardById(cardId))
    .then((card) => res.json(card))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// edit card (title and name?)
router.patch('/:id', (req, res) => {
  const details = req.body
  const id = Number(req.params.id)
  db.editCard(id, details)
    .then(() => {
      res.json(details)
    })
    .catch((err) => res.status(500).json({ dberr: err.message }))
})

// get card by id (to edit)
router.get('/card/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getCardById(id)
    .then((card) => {
      res.json(card)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// get card by user (for profile page)
router.get('/user/:id', (req, res) => {
  const userId = req.params.id
  db.getCardByUser(userId)
    .then((cardArr) => res.json(cardArr))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// get all messages for a card
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getAllMessages(id)
    .then((theMessages) => {
      res.json(theMessages)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

router.post('/', (req, res) => {
  const card = req.body
  db.insertCard(card)
    .then((idArr) => {
      let id = idArr[0]
      if (typeof id === 'object') {
        id = id.id
      }
      return db.getCardById(id)
    })
    .then((cardObj) => res.json(cardObj))
    .catch((err) => res.status(500).json({ message: err.message }))
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

// edit card
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)

  const detaildToUpdate = req.body

  db.updateCard(id, detaildToUpdate)
    .then(() => db.getCardById(id))
    .then((card) => res.json(card))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// // ???
// router.get('/card/:id', (req, res) => {
//   const id = req.params.id

//   db.getCardById(id)
//     .then((card) => res.json(card))
//     .catch((err) => res.status(500).json({ msg: err.message }))
// })

// edit message
router.patch('/message/:id', (req, res) => {
  const details = req.body
  const id = Number(req.params.id)

  db.editMessage(id, details)
    .then(() => {
      res.json(details)
    })
    .catch((err) => res.status(500).json({ dberr: err.message }))
})

// delete message
router.delete('/message/:id', (req, res) => {
  const id = Number(req.params.id)
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
