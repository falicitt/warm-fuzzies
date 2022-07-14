const express = require('express')
const path = require('path')

const server = express()
const cardsRoutes = require('./routes/cards')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/api/v1/card', cardsRoutes)
=======
server.use('/api/v1/card',cardsRoutes)
>>>>>>> 875a9bc955cd11e9a90ba89ce4c56dca828cd68f

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) // if someone requests anything not from the data routes I will send them the html
})

module.exports = server
