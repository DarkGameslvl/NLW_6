<<<<<<< HEAD
const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-room', (req, res) => res.render('index', { page: 'create-room' }))
route.get('/room/:room', roomController.open)

route.post('/enterRoom', roomController.enter)
route.post('/create-room', roomController.create)
route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route
=======
const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-room', (req, res) => res.render('index', { page: 'create-room' }))
route.get('/room/:room', roomController.open)

route.post('/enterRoom', roomController.enter)
route.post('/create-room', roomController.create)
route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route
>>>>>>> b83758e74df287c14007443e70c1a368ae59d90a
