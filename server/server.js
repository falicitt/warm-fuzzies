const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const server = express()
const cardsRoutes = require('./routes/cards')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(fileUpload())

server.use('/api/v1/card', cardsRoutes)

server.post('/upload', (req, res) => {
  const file = req.files.image
  file.mv(`${__dirname}/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error('server error', err)
      return res.status(500).send(err)
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) // if someone requests anything not from the data routes I will send them the html
})

module.exports = server
