const express = require('express')
const path = require('path')

const server = express()
const cardsRoutes = require('./routes/cards')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/card',cardsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) // if someone requests anything not from the data routes I will send them the html
})

module.exports = server
